const express=require('express');
const router=express.Router();
const DemandeService= require("../models/demandeserviceModel")


router.get("/",async (req,res)=>{
    try{
        let DemandeS = await DemandeService.find({}) 
        res.send(DemandeS) 
    }catch(err){
        console.log(err) 
    }
})
router.post("/newdemande",async(req,res)=>{
    try{
      const newdemande= new DemandeService({
        titre: req.body.titre,
        description: req.body.description,
        prixMax:req.body.prixMax
      })
       await newdemande.save()
       res.send(newdemande)
       console.log("saved!!")
    } 
    catch(err){
        console.log(err)
    }
})

router.delete("/deletedemande/:id",async(req,res)=>{
    try{
        const demande = await DemandeService.findByIdAndRemove({_id:req.params.id})
        res.send(demande)
        console.log("deleted !!")
    }
    catch(err){
        console.log(err)
    }
   

})
router.put("/updatedemande/:id",async(req,res)=>{
    try{
         const updatedemande = await DemandeService.findByIdAndUpdate({_id:req.params.id},
         {
            titre: req.body.titre,
            description: req.body.description,
            prixMax:req.body.prixMax
         })
         res.send(updatedemande)
         console.log("modified !!!")
    }
    catch(err){  
        console.log(err)
    }
})

module.exports=router