var express = require('express')
var router = express.Router()
var staffController = require('../controller/staff.controller')

router.get('/all/:name', staffController.getEmployeeByName)
router.get('/employee/:id', staffController.getEmployeeById)

module.exports = router