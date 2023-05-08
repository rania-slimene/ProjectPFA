const express=require("express");
const router=express.Router();
const Utilisateur=require("../models/utilisateurModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
// to signup 
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
          let utilisateur = await Utilisateur.findOne({ email: req.body.email });
          if (utilisateur) {
              return res.send({ message: "User already exist" });
          } else {
              try {
                 
                  // Insert the new user if they do not exist yet
                  let user = await new Utilisateur({
                    nom:req.body.nom,
                    prenom:req.body.prenom,
                    login:req.body.login,
                    motDePasse:await  hashedPass,
                    nTel:req.body.nTel,
                    email:req.body.email,
                    localisation:req.body.localisation
                
                  })
                  console.log("fichier added ");
  
                  await user.save().then(Utilisateur => {
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


 //signin enseignant
 router.post('/signin/', async (req, res) => {
    const { email, motDePasse } = req.body;
    try {
        console.log("try");
        const user = await Utilisateur.findOne({ email });
        console.log("user found");
        console.log(user);
        if (user) {
            bcrypt.compare(motDePasse, user.motDePasse, function (err, result) {
                if (err) {
                    console.log("err");
                    res.json({
                        error: err
                    })
                }
                if (result) {
                    console.log("result");
                    let token = jwt.sign({ nom: user.nom }, 'verySecretValue')

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
 

module.exports =router;