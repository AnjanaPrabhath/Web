const router =  require("express").Router();
const Notice = require("../Models/Notice")

// add notice
router.route("/add").post((req,res)=>{
    const newNotice =  new Notice({
        ...req.body
    })

    newNotice.save()
    res.json(newNotice)
})

router.route("/").get((req,res)=>{
    Notice.find().then((notice)=>{
        res.json(notice)
    }).catch((err)=>{
        res.json(err.message)
    })
})

router.route("/update/:id").put((req,res)=>{
    const id =req.params.id
    
    const {Topic,Message} = req.body

    const updateNotice = {Topic,Message}

    Notice.findByIdAndUpdate(id,updateNotice).then(()=>{
        res.json({status:"Updated",employee:updateNotice})
    }).catch((err)=>{
        res.json(err.message)
    })
})

router.route("/delete/:id").delete((req,res)=>{
    const id = req.params.id

    Notice.findByIdAndDelete(id).then(()=>{
        res.json("deleted")
    }).catch((err)=>{
        res.json(err.message)
    })
})

router.route("/get/:id").get((req,res)=>{
    const id = req.params.id

    Notice.findById(id).then((notice)=>{
        res.json(notice)
    }).catch((err)=>{
        res.json(err.message)
    })
})


module.exports = router