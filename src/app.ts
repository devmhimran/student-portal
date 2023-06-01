import express, { Application, Request, Response, urlencoded } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.router'

const app: Application = express()
// const port = 3000

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/api/v1/users/', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
