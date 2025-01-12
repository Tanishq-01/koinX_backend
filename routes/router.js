const express = require('express')
const router = express.Router()
const {latestData,deviation} = require('../controllers/statsController')
const verifyCoin = require('../middlewares/verifyCoin')

router.get('/stats',verifyCoin,latestData)
router.get('/deviation',verifyCoin,deviation)

module.exports = router