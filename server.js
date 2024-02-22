const express = require('express')
const app = express()
const dotenv = require('dotenv');

const morgan = require('morgan');
const connectDB = require('./config/db')

//configure env
dotenv.config();





//database config
connectDB();
//middelwares
app.use(express.json());
app.use(morgan('dev'));
app.get('/', function (req, res) {
    res.send('<h1>welcome to eliteshop</h1> ')
})






PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at ${process.env.DEV_MODE}mode on port ${PORT}`);
})





