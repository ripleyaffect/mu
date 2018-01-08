const express = require('express')
const path = require('path')

const PORT = 8000

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
