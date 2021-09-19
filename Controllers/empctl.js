// To perform CRUD operations 
//here we will use main logic for CREATE,READ,UPADTE AND DELETE.
//we have to apply logic on the model of the schema of the dta base
const employee = require('../Model/emp');
exports.create = ((req, res)=>{
    console.log("Create Employee Data")
    const {emp_id, emp_name, designation} = req.body;
    employee.create({emp_id, emp_name, designation})
    .then((empdetails)=> 
    {res.status(200).send(empdetails)})
    .catch((err)=>{res.status(400).send(err)})
}) 
