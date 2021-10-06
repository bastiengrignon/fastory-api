import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import Routes from './route'

dotenv.config()

const PORT = Number(process.env.PORT) || 3005

const app = express()

app.use(cors())
app.use(express.json())

Routes(app)

app.listen(PORT, () => console.log(`API started on ${PORT}`))
