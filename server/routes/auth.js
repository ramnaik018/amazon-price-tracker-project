const express = require('express')
const router=express.Router()
const AuthController = require('../controllers/authcontroller')

router.post('/signup',AuthController.register)
router.post('/login',AuthController.login)
router.post('/addProduct',AuthController.product)

module.exports = router