const express=require('express');
const router=express.Router();
const Message = require("../models/messageModel")
const Client=require('../models/clientModel');
const Fournisseur=require('../models/fournisseurModel');

async function addMissingData(Service){
    try{
           const user=await findTheUser(Service.ref);
           Service.ref=user;
           //console.log("function call ",service)
            return Service    
    }catch(err){
       console.log(err);
    }
   }
//get all the messages
router.get("/",async (req,res)=>{
    try{

       let message= await Message.find()
       const asyncRes = await Promise.all(message.map(async e=> await addMissingData(e)));
       console.log(asyncRes)
         res.send(asyncRes)
       res.send(message);

    }catch(err){
        console.error(err)
    }
})

async function findTheUser(id){
    try{
    let fournisseur=await Fournisseur.findById(id).select("nom prenom nTel")
    if(fournisseur!=null){
        return fournisseur
    }else{
        let client =await Client.findById(id).select("nom prenom")
        return client;
    }
    }catch(err){
        console.log(err)
    }
}
//post one message
router.post("/addMessage/:id",async(req,res)=>{
    try{
        const newMessage=new Message({
           contenu:req.body.contenu,
            dateEnvoi:Date.now(),
            sender:req.body.sender,
            ref:req.params.id,
           
        })
        await newMessage.save();
        res.send(newMessage);
    }catch(err){
        console.log(err)
    } 
})

router.delete("/deleteMessage/:id",async(req,res)=>{
    try{
       const detMessage = await Message.findByIdAndRemove({_id:req.params.id})
       res.send(detMessage)
    }catch(err){  
        console.log(err)
    }
})

module.exports=router;

