import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

let server: Server

process.on('uncaughtException', err => {
  errorLogger.error(err)
  process.exit(1)
})

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })

    logger.info(`Database connect successfully`)
  } catch (err) {
    errorLogger.error(`Database connect Failed`, err)
  }

  process.on('unhandledRejection', err => {
    errorLogger.error('unhandled server rejected !!!')
    if (server) {
      server.close(() => {
        errorLogger.error(err)
      })
      process.exit(1)
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
