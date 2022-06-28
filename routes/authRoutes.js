const express = require('express')
const Tought = require('../models/tought')
const router = express.Router()

//controllers
const AuthController = require('../controllers/AuthController')

router.get('/login', AuthController.login)
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)
router.get('/logout', AuthController.logout)


module.exports = router