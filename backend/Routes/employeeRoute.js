const Employee = require("../Models/Employee")
const router =  require("express").Router();

// add empoloyee
router.route("/add").post((req,res)=>{
    const newEmployee =  new Employee({
        ...req.body
    })

    newEmployee.save()
    res.json(newEmployee)
})

//get all employees
router.route("/").get((req,res)=>{
    Employee.find().then((emp)=>{
        res.json(emp)
    }).catch((err)=>{
        res.json(err.message)
    })
})

router.route("/update/:id").put((req,res)=>{
    const id =req.params.id
    
    const {name,email,phoneNumber,Password,confirmPassword} = req.body

    const updatedEmp = {name,email,phoneNumber,Password,confirmPassword}

    Employee.findByIdAndUpdate(id,updatedEmp).then(()=>{
        res.json({status:"Updated",employee:updatedEmp})
    }).catch((err)=>{
        res.json(err.message)
    })
})

router.route("/delete/:id").delete((req,res)=>{
    const id = req.params.id

    Employee.findByIdAndDelete(id).then(()=>{
        res.json("deleted")
    }).catch((err)=>{
        res.json(err.message)
    })
})

router.route("/get/:id").get((req,res)=>{
    const id = req.params.id

    Employee.findById(id).then((emp)=>{
        res.json(emp)
    }).catch((err)=>{
        res.json(err.message)
    })
})

module.exports = router