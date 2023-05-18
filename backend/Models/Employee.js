const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema =  new Schema ({
    name :{
        type : String
    },
    email : {
        type : String
    },
    phoneNumber : {
        type : String
    },
    Password : {
        type : String
    },
    confirmPassword: {
        type : String
    }
})

const Employee = mongoose.model("Employee",employeeSchema)

module.exports = Employee
