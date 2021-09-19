
//we are defining the data base schema here and write export method from this schema program to use this schema outside this file
const mongoose = require('mongoose');

const emp = new mongoose.Schema({

    emp_id:{
        type: Number,
        required: true
    },
    emp_name:{
        type: String,
        required: true
    },    
    designation:{

        type: String,
        required: true
    }    

})
module.exports = mongoose.model('employee', emp)