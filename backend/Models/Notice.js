const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeSchema  =  new Schema({
    Topic : {
        type: String
    },
    Message : {
        type : String
    }
})

const Notice = mongoose.model("Notice",noticeSchema)

module.exports = Notice
