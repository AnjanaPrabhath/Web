const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema  =  new Schema({
    name : {
        type :  String
    },
    description : {
        type : String
    },
    price  : {
        type : String
    }
})

const product = mongoose.model("Product",productSchema)
module.exports =product