const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())
const userRegister = require('./routes/userRegister')
const userLogin = require('./routes/userLogin')

app.use(express.json())

dotenv.config()


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('connect');
    app.listen(process.env.PORT || 8000)
}).catch(err => console.log(err))
app.get('/', (req, res) => {
    res.send('api running')
})


// routes

app.use(userRegister)
app.use(userLogin)


