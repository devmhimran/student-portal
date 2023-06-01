import express, { Application, Request, Response, urlencoded } from 'express'
import cors from 'cors'

const app: Application = express()
const port = 3000

app.use(cors())
app.use(urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
