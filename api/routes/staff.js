var express = require('express')
var router = express.Router()
var staffController = require('../controller/staff.controller')

router.get('/:name', staffController.getEmployee)

module.exports = router