const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LiveStockSchema = new Schema({
    ownerName : {
        type :  String
    },
    TYPE : {
        type : String
    },
    Age :  {
        type :  String
    },
    weight  : {
        type :  String
    }
})

const LiveStock = mongoose.model("LiveStock",LiveStockSchema)
module.exports =LiveStock