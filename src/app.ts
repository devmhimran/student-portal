import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from 'express'
import cors from 'cors'
import globalErrorHandler from './middlewares/globalErrorHandler'
import router from './app/routes'
import httpStatus from 'http-status'

const app: Application = express()
// const port = 3000

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/api/v1/', router)

// app.use('/api/v1/users/', UsersRoutes)
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes)

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // throw new Error('Testing Error logger')//////
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Server Working well !!!',
    errorMessage: [
      {
        path: req.originalUrl,
        // message: 'API not found',
      },
    ],
  })
})

app.use(globalErrorHandler)

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  })
})

export default app
