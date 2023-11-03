const router = require("express").Router()
// const { verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Order = require("../models/Order")

// create cart
//verifyToken
router.post("/",async (req,res) => {
    const newOrder = new Order(req.body)
    try{
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(error){
        res.status(500).json(error)
    }
})

//update
//verifyTokenAndAdmin
router.put("/:id",async (req,res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedOrder)
    }catch(error){
        res.status(500).json(error)
    }
})

//delete
//verifyTokenAndAdmin
router.delete("/:id",async (req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted")
    }catch(error){
        res.status(500).json(error)
    }
})

//get user cart
//verifyTokenAndAuthorization
router.get("/find/:userId",async (req,res) =>{
    try{
        const orders = await Order.find({userId:req.params.userId})
        res.status(200).json(orders)
    }catch(error){
        res.status(500).json(error)
    }
})

//get all
//verifyTokenAndAdmin
router.get("/",async(req,res)=>{
    try{
        const orders = await Order.find()
        res.status(200).json(orders)
    }catch(error){
        res.status(500).json(error)
    }
})

// get monthy income
//verifyTokenAndAdmin
router.get("/income",async (req,res) => {
    const productId = req.query.pid
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date(new Date(new Date().setMonth(lastMonth.getMonth()-1)))
    try{
        const income = await Order.aggregate([
            { $match : { createdAt: { $gte: previousMonth }, ...(productId && {
                products:{$elemMatch:{productId}}
            } ) } },
            {
                $project : {
                    month : { $month: "$createdAt"  },
                    sales : "$amount"
                }
            },
            {
                $group : {
                    _id : "$month",
                    total: { $sum : "$sales" }
                }
            }
        ])
        console.log(income)
        res.status(200).json(income)
    }catch(error){
        res.status(500).json(error)
    }
})

router.get("/sales", async (req, res) => {
    try {
      const salesData = await Order.aggregate([
        {
          $group: {
            _id: null,
            totalSales: { $sum: "$amount" }
          }
        }
      ]);
      res.status(200).json({ sales: salesData[0]?.totalSales || 0 });
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.get("/cost", async (req, res) => {
    try {
      const costData = await Order.aggregate([
        {
          $group: {
            _id: null,
            totalCost: { $sum: "$cost" } 
          }
        }
      ]);
      res.status(200).json({ cost: costData[0]?.totalCost || 0 });
    } catch (error) {
      res.status(500).json(error);
    }
  });
  

module.exports = router