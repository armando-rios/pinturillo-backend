import express from 'express'
import cors from 'cors'
import connectDB from './db.js'

const PORT = process.env.PORT || 3000

const app = express()

connectDB()

app.use(cors)
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
