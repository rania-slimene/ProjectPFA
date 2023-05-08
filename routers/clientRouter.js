const express=require('express');
const router=express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Client = require("../models/clientModel")

router.get("/",async(req,res)=>{
    try{
        const client = await Client.find({})
        res.send(client)

    }catch(err)
    {
        console.log(err)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const client = await Client.findOne({_id:req.params.id})
        res.send(client)

    }catch(err)
    {
        console.log(err)
    }
})
router.post("/addclient",async(req,res)=>{
    try{
   const newclient = new Client({
    nom:req.body.nom,
    prenom:req.body.prenom,
    login:req.body.login,
    motDePasse:req.body.motDePasse,
    localisation:req.body.localisation,
    nTel:req.body.nTel,
    email:req.body.email,
    ville:req.body.ville,
    codePostal: req.body.codePostal
   })
   await newclient.save()
   res.send(newclient)
   console.log("save !!")
  }catch(err)  {
    console.log(err)
  }
})
router.put("/updateclient/:id",async (req,res)=>{
    try{

        let client=await Client.findOneAndUpdate({_id:req.params.id},
            {
                nom:req.body.nom,
                prenom:req.body.prenom,
                login:req.body.login,
                motDePasse:req.body.motDePasse,
                localisation:req.body.localisation,
                nTel:req.body.nTel,
                email:req.body.email,
                ville:req.body.ville,
                codePostal: req.body.codePostal
            })
          
            
        res.send(client)        
    }catch(err){
        console.log(err)
    }
});
router.delete("/deleteclient/:id",async (req,res)=>{
    try{
        let detclient=await Client.findOneAndRemove({_id:req.params.id})
        res.send(detclient);
    }catch(err){
        console.log(err)
    }
})
router.post("/signup", async (req, res) => {
    console.log(req.file);
  
      bcrypt.hash(req.body.motDePasse, 3, async function (err, hashedPass) {
          if (err) {
              res.json({
                  error: err
              })
          }
          else {
              console.log(hashedPass);
          }
          let client = await Client.findOne({ email: req.body.email });
          if (client) {
              return res.send({ message: "User already exist" });
          } else {
              try {
                 
                  // Insert the new user if they do not exist yet
                  let client = await new Client({
                    nom:req.body.nom,
                    prenom:req.body.prenom,
                    login:req.body.login,
                    motDePasse:await  hashedPass,
                    nTel:req.body.nTel,
                    email:req.body.email,
                    localisation:req.body.localisation,
                    specialite:req.body.specialite,
                    ville:req.body.ville,
                    codePostal: req.body.codePostal
                    
                
                  })
                  console.log("fichier added ");
  
                  await client.save().then(Client => {
                      res.json({
                          message: "user added successfully "
                      })
                      
                  });
                  console.log("done!!");
  
              } catch (err) {
                  console.log(err);
              }
          }
      })
  
  });


 //signin client
 router.post('/signin/', async (req, res) => {
    const { email, motDePasse } = req.body;
    try {

        console.log("try");
        const cl = await Client.findOne({ email });
        console.log("user found");
        console.log(cl);
        if (cl) {
            bcrypt.compare(motDePasse, cl.motDePasse, function (err, result) {

                if (err) {
                    console.log("err");
                    res.json({
                        error: err
                    })
                }
                if (result) {
                    console.log("result");
                    let token = jwt.sign({ nom: cl.nom }, 'verySecretValue')

                    res.send({
                        message: 'login successful',
                        token
                    })
                } else {
                    res.send({
                        message: "Password does not matched"
                    })
                }
            })
        } else {
            res.send({
                message: 'No user found'
            })
        }

    } catch (err) {
        console.log(err);
    }

    console.log("done!!");
    try {





    } catch (err) {
        return res.status(422).send({ error: 'errr' });
    }
});
module.exports=router;