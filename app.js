require('dotenv').config()
const express =require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./Routes/routes')


//const hostname= 'localhost'
//const port = '8500'

const hostname =process.env.URL
const port = process.env.PORT || 8500
const db_connection = process.env.DB_URL

const app=express()

app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization')
    next();
})

app.use('/',router)
//mongodb+srv://<username>:<password>@cluster0.wms8j.mongodb.net/?retryWrites=true&w=majority
//mongodb://127.0.0.1:27017/zomato
mongoose.connect(db_connection)
.then(client =>{
    app.listen(port,hostname,()=>{
        console.log(`Server is running on ${hostname}:${port}`)
    })
})
.catch(err =>{
    console.log(err)
})