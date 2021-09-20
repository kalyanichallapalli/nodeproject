// To perform CRUD operations 
//here we will use main logic for CREATE,READ,UPADTE AND DELETE.
//we have to apply logic on the model of the schema of the dta base
const employee = require('../Model/emp');
exports.create = ((req, res)=>{
    console.log("Create Employee Data")
    const {emp_id, emp_name, designation} = req.body;
    employee.create({emp_id, emp_name, designation})               // insert data in to data base using create
    .then((empdetails)=>{res.status(200).send(empdetails)})
    .catch((err)=>{res.status(400).send(err)})

}) 

exports.list = ((req, res)=>{
    console.log("Get All Employee Details");
    employee.find({})                                               // read the recoed fform the data base using find method
    .then((empdetails)=> {res.status(200).send(empdetails)})
    .catch((err)=>{res.status(400).send(err)})


})

exports.update = ((req, res)=>{
    console.log("Record To Be updated In Employee Details " + req.params);
    console.log(req.params)
    console.log(req.body)
    employee.updateOne({emp_id:req.params.emp_id}, {designation:req.body.designation}) // update the recored in the data base using updateone method
    .then((empdetails)=>{res.status(200).send(empdetails)})
    .catch((err)=>{res.status(400).send(err)})
  
  })
      

exports.delete = ((req, res)=>{
  console.log("Record To Be Deleted From Employee Details");
  employee.deleteOne({emp_id:req.params.emp_id})                       // delete the recored from the data base
  .then((empdetails)=>{res.status(200).send(empdetails)})
  .catch((err)=>{res.status(400).send(err)})

})
    
    