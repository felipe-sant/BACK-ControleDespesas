import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"
import routes from './routes/_index'

console.clear()

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()
const MONGODB_URI = process.env.MONGODB_URI || ''

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error(error))

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

app.use(routes)