// assign dependecies
const express =  require('express')
const mongoose = require('mongoose')
const bodyParser =  require('body-parser')
const cors= require('cors')
const dotenv = require('dotenv');
mongoose.set('strictQuery', true);    // remove a warning

// create express app
const app= express();

// middlewares
app.use(cors());
app.use(bodyParser.json());



// creating a port to server
const PORT = 8070;
app.listen(PORT,()=>{
    console.log("PORT is UP "+PORT);
})

// connect DB
const URL_DB ="mongodb+srv://prabhathxdissanayake:1234@cluster0.w55bwjj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URL_DB,).then(()=>{
    console.log("DB is connected")
}).catch((err)=>{
    console.log(err.message)
})


const employee =require("./Routes/employeeRoute")
app.use("/employee",employee)

const notice = require("./Routes/noticeRoute")
app.use("/notice",notice)

const product = require("./Routes/productRoute")
app.use("/product",product)

const customer  = require("./Routes/CustomerRoute")
app.use("/customer",customer)

const liveStock = require("./Routes/LiveStockRoute")
app.use("/liveStock",liveStock)