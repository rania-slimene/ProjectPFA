const express=require('express');
const router=express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Fournisseur = require("../models/fournisseurModel")
const passport = require("passport");
const keys = require("../config/key");
const upload = require("./Upload") 
router.get("/",async(req,res)=>{
    try{
        const fournisseur = await Fournisseur.find({})
        res.send(fournisseur)
   
    }catch(err)   
    {
        console.log(err)
    }
}) 



router.get("/:id",async(req,res)=>{
    try{
        const fournisseur = await Fournisseur.findOne({_id:req.params._id})
        res.send(fournisseur)

    }catch(err)
    {
        console.log(err)
    }
})

router.post("/addfournisseur",async(req,res)=>{
    try{
   const newFournisseur = new Fournisseur({
    nom:req.body.nom,
    prenom:req.body.prenom,
    login:req.body.login,
    motDePasse:req.body.motDePasse,
    localisation:req.body.localisation,
    nTel:req.body.nTel,
    email:req.body.email,
    specialite:req.body.specialite,
    
    
   })
   await  newFournisseur.save()
   res.send( newFournisseur)
   console.log("save !!")
  }catch(err)  {
    console.log(err)
  }
})
router.put("/updatefournisseur/:id",async (req,res)=>{
    try{

        let fournisseur=await Fournisseur.findOneAndUpdate({_id:req.params.id},
            {
                nom:req.body.nom,
                prenom:req.body.prenom,
                login:req.body.login,
                motDePasse:req.body.motDePasse,
                localisation:req.body.localisation,
                nTel:req.body.nTel,
                email:req.body.email,
                specialite:req.body.specialite
            })
            
        res.send(fournisseur)        
    }catch(err){
        console.log(err)
    }
});
router.delete("/deletefournisseur/:id",async (req,res)=>{
    try{
        let detfournisseur=await Fournisseur.findOneAndRemove({_id:req.params.id})
        res.send(detfournisseur);
    }catch(err){
        console.log(err)
    }
})



router.post("/signup",upload.single('photo'), async (req, res) => {
    console.log(req.file);
    try {
      // ... existing code ...
      // Add the filename or file path to the user object
      req.body.photo = req.file.filename;

      // ... existing code ...
    } catch (err) {
      console.log(err);
    }
      bcrypt.hash(req.body.motDePasse, 3, async function (err, hashedPass) {
          if (err) {
              res.json({
                  error: err
              })
          }
          else {
              console.log(hashedPass);
          }
          let fournisseur = await Fournisseur.findOne({ email: req.body.email });
          if (fournisseur) {
              return res.send({ message: "User already exist" });
          } else {
              try {
                 
                  // Insert the new user if they do not exist yet
                  let user = await new Fournisseur({
                    nom:req.body.nom,
                    prenom:req.body.prenom,
                    login:req.body.login,
                    motDePasse:await  hashedPass,
                    nTel:req.body.nTel,
                    email:req.body.email,
                    localisation:req.body.localisation,
                    specialite:req.body.specialite,
                    photo:req.body.photo
                
                  })
                  console.log("fichier added ");
  
                  await user.save().then(Fournisseur => {
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


 //signin fournisseur
 /*router.post('/signin/', async (req, res) => {
    const { email, motDePasse } = req.body;
    try {
        console.log("try");
        const user = await Fournisseur.findOne({ email });
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
router.post('/signin', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err) {
        return next(err); 
      }
  
      if (!user) {
        return res.status(400).json({
          message: info.message,
        });
      }
  
      // Create a JWT token and send it to the client
      const token = jwt.sign({ sub: user._id }, 'mySecretKey');
      return res.json({
        message: 'login successful',
        token: token,
      });
    })(req, res, next);
  }); 
*/




  router.post("/signin", (req, res) => {
    const userId = req.body.id;
    const email = req.body.email;
    const motDePasse = req.body.motDePasse;
  
    // find user by email
    Fournisseur.findOne({ email }).then(user => {
      // check for user
      if (!user) {
        return res.status(404).json("user not found ");
      }
      // check password
      bcrypt.compare(motDePasse, user.motDePasse).then(isMatch => {
        if (isMatch) {
          // User matched
          const payload = { _id: user.id, nom: user.nom }; // create jwt payload
          // sign token
          jwt.sign(payload, keys.secretOrKey, (err, token) => {
            
            res.json({
              success: true,
                message: 'login successful',
              token: "bearer" + token
             
            });
            req.session.userId = user.id; // store user ID in session
            res.redirect('/dashboard'); // redirect user to their dashboard
          });
        } else {
          return res.status(400).json("password incorrect");
        }
      });
    });
  });
  

  router.get("/nom", verifyToken, (req, res) => {
    const userId = req.user.id; // récupérer l'ID de l'utilisateur depuis le JWT
    Fournisseur.findById(userId).then(user => {
      // Vérifier si l'utilisateur existe et renvoyer son nom
      if (user) {
        res.json({ nom: user.nom });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }).catch(err => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
  });
  


  //verify token

  function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const token = bearer[1];
      // Verify token
      jwt.verify(token, keys.secretOrKey, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Unauthorized' });
        } else {
          // Save the decoded user to the request object
          req.user = decoded;
          next();
        }
      });
    } else {
      // Forbidden
      return res.status(403).json({ message: 'Forbidden' });
    }
  }
  
  
  
  
  
  
module.exports=router;