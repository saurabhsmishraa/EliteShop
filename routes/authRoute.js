const express = require('express');

const authController = require('../controllers/authController');
const authmiddlleware = require('../middelwares/authmiddlleware');
// router object
const router = express.Router()
//register || mehod post

router.post('/register', authController.registerController)




//Login ||method post

router.post('/login', authController.loginController)


// test route
router.get("/test", authmiddlleware.requireSignIn, authmiddlleware.isAdmin, authController.testController)
module.exports = router;