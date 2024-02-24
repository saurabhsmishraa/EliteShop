const express = require('express')
const app = express()
const dotenv = require('dotenv');

const morgan = require('morgan');
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoute')

//configure env
dotenv.config();





//database config
connectDB();
//middelwares
app.use(express.json());
app.use(morgan('dev'));


//routes

app.use('/api/v1/auth', authRoutes)
app.get('/', function (req, res) {
    res.send('<h1>welcome to eliteshop</h1> ')
})






PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server running at ${process.env.DEV_MODE}mode on port ${PORT}`);
})





