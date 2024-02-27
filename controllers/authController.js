const userModel = require('../models/userModel');
const authHelper = require('./../helpers/authHelper')
const JWT = require('jsonwebtoken');
const registerController = async (req, res) => {

    try {
        const { name, email, password, phone, address } = req.body;
        if (!name) {
            return res.send({ error: 'name is required' })
        }




        if (!email) {
            return res.send({ message: 'email is required' })
        }



        if (!password) {
            return res.send({ message: 'password is required' })
        }


        if (!phone) {
            return res.send({ message: 'phone number is required' })
        }
        if (!address) {
            return res.send({ message: 'address is required' })
        }


        //check user
        const existingUser = await userModel.findOne({ email })

        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'already register user please login'


            })
        }
        //register user
        const hashedPassword = await authHelper.hashPassword(password)

        //save
        const user = await new userModel({
            name, email, phone, address, password: hashedPassword
        }).save();
        res.status(201).send({
            success: true,
            message: 'user register successfully',
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error in registration',
            error
        })
    }

}


//login user
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'invalid email or password'
            })
        }
        //check user on email bases
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'email is not registered'
            })
        }
        const match = await authHelper.comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'invalid password'
            })
        }
        //token

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(200).send({
            success: true,
            message: 'login successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: true,
            message: 'error in login',
            error
        })
    }

}
//test controller
const testController = (req, res) => {
    res.send('protected route');
}
module.exports = {
    registerController,
    loginController,
    testController
}