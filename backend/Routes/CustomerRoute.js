const router =  require("express").Router();
const Customers= require("../Models/Customer")

router.route("/add").post((req,res)=>{
    const newCustomer =  new Customers({
        ...req.body
    })

    newCustomer.save()
    res.json(newCustomer)
})

router.route("/").get((req,res)=>{
    Customers.find().then((Customer)=>{
        res.json(Customer)
    }).catch((err)=>{
        res.json(err.message)
    })
})


module.exports = router;