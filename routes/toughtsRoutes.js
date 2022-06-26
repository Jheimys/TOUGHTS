const express = require('express')
const Tought = require('../models/tought')
const router = express.Router()

//controllers
const ToughtController = require('../controllers/ToughtController')

router.get('/', ToughtController.showToughts)

module.exports = router