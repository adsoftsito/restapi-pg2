const cors = require('cors')

const express = require('express')
const routes = require('../routes/index.js')

const server = express()
server.use(cors())
server.options('*', cors())

server.use(express.json())
server.use('/api', routes)

module.exports = server // make visible server
