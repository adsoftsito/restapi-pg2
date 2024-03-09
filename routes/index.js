const { Router } = require('express')
//const controllers = require('../controllers/index.js')

const router = Router()

router.get('/', (req, res) => res.send('Welcome to adsoft api'))
router.get('/pokemon', (req, res) => res.send('Welcome to pokemen api'))
router.get('/starwars', (req, res) => res.send('Welcome to starwars api'))

module.exports = router
