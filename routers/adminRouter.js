
const express=require('express');
const router=express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const Admin = require("../models/adminModel")

router.get("/",async (req,res)=>{
    try{
        let admins=await Admin.find({})
        res.send(admins)
    }catch(err){
        console.log(err)
    }
})
//get one admin
router.get("/getOneAdmin/:id",async (req,res)=>{
    try{
        let oneAdmin=await Admin.findOne({_id:req.params.id})
        res.send(oneAdmin);
    }catch(err){
        console.error(err)
    }
})

// post new admin
router.post('/addadmin',async (req,res)=>{
    try{
        const newAdmin=new Admin({
            nom:req.body.nom,
            prenom:req.body.prenom,
            login:req.body.login,
            motDePasse:req.body.motDePasse,
            nTel:req.body.nTel,
            email:req.body.email
        })
        await newAdmin.save();
        res.send(newAdmin);
    }catch(err){
        console.log(err)
    }
})
// update admin
router.put("/updateAdmin/:id",async (req,res)=>{
    try{
        bcrypt.hash(req.body.mot_de_passe, saltRounds,async (err,hash)=>{
        let e=await Admin.findOneAndUpdate({_id:req.params.id},
            {
                nom:req.body.nom,
                prenom:req.body.prenom,
                login:req.body.login,
                motDePasse:await hash,
                nTel:req.body.nTel,
                email:req.body.email,
                localisation:req.body.localisation

            })
            res.send(e)  
        })
             
    }catch(err){
        console.log(err)
    }
});

router.delete("/deleteadmin/:id",async (req,res)=>{
    try{
        let detadmin=await Admin.findOneAndRemove({_id:req.params.id})
        res.send(detadmin);
    }catch(err){
        console.log(err)
    }
})

//validate student
router.put("/validateUser/:cin",async(req,res)=>{
    await Etudiant.findOneAndUpdate({ncin:req.params.cin},{etat:true})
    .then(result=>res.send(result))
    .catch(e=>console.log(e))
})
// reject student
router.put("/rejectedUser/:CIN",async(req,res)=>{
    await Etudiant.findOneAndUpdate({ncin:req.params.CIN},{rejected:true})
    .then(result=>res.send(result))
    .catch(e=>console.log(e))
})
module.exports=router