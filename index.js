require('dotenv').config() // this allows us to stash 'artificial env variables' in a file
const express = require('express')
const cors = require('cors')

// console.log(process.env.PORT) // does not work on my machine, but should work on heroku
console.log(process.env.LADY) // lives in .env

const PORT = process.env.PORT || 5000 // genius

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`<h1>Web 45 Rocks</h1>`)
})

server.get('/api', (req, res) => {
    res.json({ message: 'Web 45 is awesome' })
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})