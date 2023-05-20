//1 atomatically loading files into our project
require('dotenv').config()

//2 import express
const express=require('express')

//corse for conneecting 2 ports
const corse= require('cors')

//import dg
require('./db/connection')

//import router
const router=require('./routes/router')

//3 create a serer application
const server=express()

//to store port number
const PORT=5000

//use in server application
server.use(corse())
server.use(express.json())
server.use(router)

//route -localhoste://5000
// server.get('/',(req,res)=>{
//     res.status(200).json('E-commerse service application')
// })

//4 to run sserver application
server.listen(5000,()=>{
    console.log('listening to the port '+PORT);
})
