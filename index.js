require('dotenv').config() // this allows us to stash 'artificial env variables' in a file

const path = require('path')

const express = require('express')
const cors = require('cors')

// console.log(process.env.PORT) // does not work on my machine, but should work on heroku
console.log(process.env.LADY) // lives in .env

const PORT = process.env.PORT || 5000 // genius

const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/api', (req, res) => {
    res.json({ message: 'Web 45 is awesome' })
})

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})