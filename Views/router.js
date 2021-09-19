//express manage routurs easily so  get express in to this file

const express = require('express');                   //Include express
const router = express.Router();                      //express is having router method and assigning to router variable
const empctl = require('../Controllers/empctl');
console.log("Creating router")
router.post('/api/emp/create', empctl.create)         //Based on this routung we will perfoem CRUD operations so we are importing the controller/empctl logic
//router.route('/api/emp/create').post(empctl.create);     //Using router variable with route method we are defining the API's here. POST method we are creating the contoller   
module.exports = router;                              // to exposrt router to other modules