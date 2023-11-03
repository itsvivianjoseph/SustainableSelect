const router = require("express").Router()
// const { verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const User = require("../models/User")

//update
//verifyTokenAndAuthorization
router.put("/:id",async (req,res)=>{
    if(req.body.password) { 
        req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString()
    }
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateUser)
    }catch(error){
        res.status(500).json(error)
    }
})

//delete
//verifyTokenAndAuthorization
router.delete("/:id",async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("The user has been deleted")
    }catch(error){
        res.status(500).json(error)
    }
})

//get user
//verifyTokenAndAdmin
router.get("/find/:id",async (req,res) =>{
    try{
        const user = await User.findById(req.params.id)
        const { password,...others } = user._doc
        res.status(200).json({...others})
    }catch(error){
        res.status(500).json(error)
    }
})

//get all user
//verifyTokenAndAdmin
router.get("/",async (req,res) =>{
    const query = req.query.new 
    try{
        const users = query ? await User.find().sort({ _id:-1 }).limit(5) : await User.find()
        res.status(200).json({users})
    }catch(error){
        res.status(500).json(error)
    }
})

//get user stats
//verifyTokenAndAdmin
router.get("/stats",async (req,res)=>{
    const date = new Date()
    const lastyear = new Date(date.setFullYear(date.getFullYear()-1))

    try{
        const data = await User.aggregate([
            { $match:{ createdAt:{ $gte:lastyear } } },
            {
                $project : {
                    month: { $month:"$createdAt" }
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{ $sum:1 }
                }
            }
        ])
        res.status(200).json(data)
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router 