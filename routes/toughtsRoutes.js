const express = require('express')
const Tought = require('../models/tought')
const router = express.Router()

//controllers
const ToughtController = require('../controllers/ToughtController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth

router.get('/dashboard',checkAuth, ToughtController.dashboard)
router.get('/', ToughtController.showToughts)

module.exports = router