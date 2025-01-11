const express = require('express')
require('dotenv').config()
const connectDB = require('./db')
const cronJob = require('./services/cronjob')
const router = require('./routes/router')
const app = express()
connectDB()
.then(()=>{
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
})
app.use(express.json())
app.use('/',router)
cronJob();