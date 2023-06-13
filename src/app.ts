import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from 'express'
import cors from 'cors'
import globalErrorHandler from './middlewares/globalErrorHandler'
import { UsersRoutes } from './app/modules/users/users.router'
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route'

const app: Application = express()
// const port = 3000

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/api/v1/users/', UsersRoutes)
app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes)

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  throw new Error('Testing Error logger')
})

app.use(globalErrorHandler)

export default app
