const express = require('express')
const router = express.Router()
const appcontroller = require('../controller/appconroller')

router.get('/username', appcontroller),
routter.post('/userinfor', appcontroller)

module.exports = router