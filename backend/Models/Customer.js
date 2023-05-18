const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name : {
        type :  String
    },
    address :{
        type : String
    },
    phoneNumber  : {
        type : String
    },
    customer :  {
        type : String
    }
})

const customer = mongoose.model("Customer",CustomerSchema)
module.exports =customer