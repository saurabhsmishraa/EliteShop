const express = require('express');

const authController = require('../controllers/authController');
// router object
const router = express.Router()
//register || mehod post

router.post('/register', authController.registerController)




//Login ||method post

router.post('/login', authController.loginController)

module.exports = router;