const router =  require("express").Router();
const products = require("../Models/Product")

router.route("/add").post((req,res)=>{
    const newNotice =  new products({
        ...req.body
    })

    newNotice.save()
    res.json(newNotice)
})

router.route("/").get((req,res)=>{
    products.find().then((Product)=>{
        res.json(Product)
    }).catch((err)=>{
        res.json(err.message)
    })
})

module.exports = router;