const router =  require("express").Router();
const LiveStocks =  require("../Models/LiveStock")

router.route("/add").post((req,res)=>{
    const newLiveStock =  new LiveStocks({
        ...req.body
    })

    newLiveStock.save()
    res.json(newLiveStock)
})

router.route("/").get((req,res)=>{
    LiveStocks.find().then((LiveStock)=>{
        res.json(LiveStock)
    }).catch((err)=>{
        res.json(err.message)
    })
})


module.exports = router;