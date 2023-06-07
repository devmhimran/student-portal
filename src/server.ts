import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })

    logger.info(`Database connect successfully`)
  } catch (err) {
    errorLogger.error(`Database connect Failed`, err)
  }
}

bootstrap()
