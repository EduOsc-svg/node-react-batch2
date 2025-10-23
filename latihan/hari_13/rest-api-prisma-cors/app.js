const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const port = 3000
const router = require('./src/routes/main')

app.use(cors(corsOptions = {
  origin: process.env.cors_origin.split(','),
  optionsSuccessStatus: 200
}))

app.use(express.json())
app.use('/api', router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})