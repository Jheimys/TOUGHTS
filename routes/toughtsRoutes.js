const express = require('express')
const Tought = require('../models/tought')
const router = express.Router()

//controllers
const ToughtController = require('../controllers/ToughtController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth


//Rotas
router.get('/', ToughtController.showToughts)

router.get('/add',checkAuth, ToughtController.createTought)
router.post('/add',checkAuth, ToughtController.createToughtSave)

router.get('/dashboard',checkAuth, ToughtController.dashboard)

router.post('/remove',checkAuth, ToughtController.removeTought)

router.get('/edit/:id', ToughtController.updateToughts)
router.post('/edit', ToughtController.updateToughtsSave)


module.exports = router