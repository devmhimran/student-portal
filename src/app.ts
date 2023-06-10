import express, { Application, Request, Response, urlencoded } from 'express'
import cors from 'cors'
import globalErrorHandler from './middlewares/globalErrorHandler'
import { UsersRoutes } from './app/modules/users/users.router'

const app: Application = express()
// const port = 3000

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/api/v1/users/', UsersRoutes)

app.get('/', (req: Request, res: Response) => {
  // throw new Error(400, 'server error man!!!')
  // next(400, 'error occur!!!')
  res.send('Working Successfully')
})

app.use(globalErrorHandler)

export default app
