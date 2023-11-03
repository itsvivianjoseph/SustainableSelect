const router = require("express").Router()
// const { verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Product = require("../models/Product")
const { calculateCarbonFootprintPercentage } = require("../carobUtils");

// //create product
//verifyTokenAndAdmin
router.post("/",async (req,res) => {
    
    const newProduct = new Product(req.body)
    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch(error){
        res.status(500).json(error)
    }
})

// create product
//verifyTokenAndAdmin
router.post("/", async (req, res) => {
    const { materials,weight } = req.body;
  
    try {
      const carbonEmissionPercentage = await calculateCarbonFootprintPercentage(materials,weight);
      const newProduct = new Product({
          ...req.body,
          carbonEmissionPercentage,
        });
        console.log("final carbon"+carbonEmissionPercentage)
        
        const savedProduct = await newProduct.save()
      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
});
  
//update
//verifyTokenAndAdmin
router.put("/:id",async (req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedProduct)
    }catch(error){
        res.status(500).json(error)
    }
})

//delete product
//verifyTokenAndAdmin
router.delete("/:id",async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")
    }catch(error){
        res.status(500).json(error)
    }
})

//get product
router.get("/find/:id",async (req,res) =>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json(error)
    }
})

//get all products
router.get("/",async (req,res) =>{
    const qNew = req.query.new 
    const qCategory = req.query.category 
    try{
        let products;
        if(qNew){ products = await Product.find().sort({createdAt:-1}).limit(5)}
        else if(qCategory) products = await Product.find({categories:{
            $in:[qCategory]
        }})
        else products = await Product.find()
        res.status(200).json({products})
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router