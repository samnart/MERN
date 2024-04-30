const dotenv = require('dotenv')
const express = require('express')
const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('whats up my nigga')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
