// we have to import config.js in mainprogram to establish the connection with data base

const express = require('express'); // to create server

const app = express();

const db = require('./DBfolder/config');// this is to import data base connection
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const router = require ('./Views/router') // include router
app.use('/', router)
const port = process.env.port || 8000

app.get('/',(req, res)=>{
    res.send('WELCOME TO THE EMPLOYEE DATA BASE')
})

app.listen(port, ()=>{
    console.log(`SERVER LISTEN ON PORT: ${port}`)

})

