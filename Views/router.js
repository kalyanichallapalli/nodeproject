//express manage routurs easily so  get express in to this file

const express = require('express');                   //Include express
const router = express.Router();                      //express is having router method and assigning to router variable
const empctl = require('../Controllers/empctl');      //Based on this routung we will perfoem CRUD operations so we are importing the controller/empctl logic
router.post('/api/emp/create', empctl.create);         //Using router variable with route method we are defining the API's here. POST method we are inserting the data  
router.get('/api/emp/details', empctl.list);           //To het the employee detals we are writing GET Operation. next go to empcontrl
router.put('/api/emp/update/:emp_id', empctl.update);  // update the data using PUT Operation
router.delete('/api/emp/delete/:emp_id', empctl.delete);// delete the record using DELETE Operation
    
module.exports = router;                              // to exposrt router to other modules