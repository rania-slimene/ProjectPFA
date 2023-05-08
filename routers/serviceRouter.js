const express=require('express');
const router=express.Router();
const Service = require("../models/serviceModel")
const Categorie = require("../models/categorieModel")

router.get("/",async (req,res)=>{
  try{
      let service =await Service.find({})
      res.send(service)
  }catch(err){
      console.log(err)
  }
})

router.post("/addservice",async(req,res)=>{
    try{
      const newService = new Service({
        nomService: req.body.nomService,
        description: req.body.description,
        prix: req.body.prix
      })
       await newService.save()
       res.send(newService)
       console.log("saved!!")
    }
    catch(err){
        console.log(err) 
    }
})
router.put("/updateService/:id",async (req,res)=>{
    try{
        
        let updateService= await Service.findOneAndUpdate({_id:req.params.id},
            {
                 nomService: req.body.nomService,
                 description: req.body.description,
                 prix: req.body.prix
            })
            res.send(updateService)  
            console.log("modifier")
      
             
    }catch(err){
        console.log(err)
    }
});

router.delete('/deleteservice/:id', async(req,res)=>{
    try{
        let deleteservice = await Service.findOneAndRemove({_id:req.params.id})
        res.send(deleteservice)
    }
    catch(err){
        res.send(err)
    }  

})
module.exports=router;