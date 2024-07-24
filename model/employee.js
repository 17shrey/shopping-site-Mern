const mongoose= require("mongoose");


const employeeSChema = new mongoose.Schema({
    employee_id: {
      type: String,
      require: true,
    },
    employee_name: {
      type: String,
      require: true,
    },
    employee_age: {
      type: String,
      require: true,
    },
    salary: {
      type: String,
      require: true,
    },
    experience: {
      type: String,
      require: true,
    },
    
  });
  

const Employee = mongoose.model("employee", employeeSChema);
module.exports = Employee;
