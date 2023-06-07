import winston, { createLogger, format, transports } from 'winston'
import path from 'path'
import DailyRotateFile from 'winston-daily-rotate-file'

const { combine, timestamp, label, printf, prettyPrint } = format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${date.toString()} ${hour}: ${minutes}, ${seconds} [${label}] ${level}: ${message}`
})

export const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'UMS' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    // new transports.File({

    //   level: 'info',
    // }),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'success',
        'UMS-%DATE%.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export const errorLogger = winston.createLogger({
  level: 'error',
  format: combine(
    label({ label: 'UMS' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    // new transports.File({
    //   level: 'error',
    // }),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'error',
        'UMS-%DATE%.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})
