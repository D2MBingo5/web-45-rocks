const express = require('express')
const cors = require('cors')

// console.log(process.env.PORT) // does not work on my machine, but should work on heroku

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