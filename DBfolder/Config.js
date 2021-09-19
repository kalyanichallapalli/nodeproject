// connect to data base using Moongoose.
//we are using Employee details database


const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Employeedetails')
.then(()=>{console.log('sucessfully connected with the data base')})
.catch(()=>{console.log('not connected to the data base')})

