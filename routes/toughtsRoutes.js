const express = require('express')
const Tought = require('../models/tought')
const router = express.Router()

//controllers
const ToughtController = require('../controllers/ToughtController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth


//Rotas
router.get('/add',checkAuth, ToughtController.creatTought)
router.get('/dashboard',checkAuth, ToughtController.dashboard)
router.get('/', ToughtController.showToughts)

module.exports = router