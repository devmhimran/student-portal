import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', err => {
  errorLogger.error(err)
  process.exit(1)
})

let server: Server

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database connect successfully`)
    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error(`Database connect Failed`, err)
  }

  process.on('unhandledRejection', err => {
    errorLogger.error(err)
    if (server) {
      server.close(() => {
        errorLogger.error(err)
        process.exit(1)
      })
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
