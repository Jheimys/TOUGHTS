const express = require('express')
const Tought = require('../models/tought')
const router = express.Router()

//controllers
const AuthController = require('../controllers/AuthController')

router.get('/login', AuthController.login)
router.get('/register', AuthController.register)

module.exports = router