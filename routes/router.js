const express = require('express')
const router = express.Router()
const {latestData,deviation} = require('../controllers/statsController')

router.get('/stats',latestData)
router.get('/deviation',deviation)

module.exports = router