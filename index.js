const express = require('express');
const app = express()
app.use(express.json())
const bodyParser = require("body-parser");
const mongoose= require('mongoose');
const cors=require('cors')
const router = express.Router()  
const session = require("express-session")
const stripeRoute = require("./routers/Stripe")
const serviceRoute = require("./routers/serviceRouter")
const categorieRoute = require("./routers/categorieRouter")
const demandeServiceRoute = require("./routers/demandeserviceRouter")
const messageRoute = require("./routers/messageRouter")
const clientRoute = require("./routers/clientRouter")
const fournisseurRoute = require("./routers/fournisseurRouter")
const adminRoute = require("./routers/adminRouter")
const loginRoute = require("./routers/loginRouter")
 
const passport = require('passport');
// Initialisation de Passport.js
app.use(
  session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false,
  })
);
// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  
  // Initialisation de Passport.js
  app.use(passport.initialize());
  app.use(passport.session());
  
  const key = require("./config/key");


// Définition des routes d'authentification
/*app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ user: req.user });
});*/
router.get('/',(req,res)=>{ 
    res.send({
        name:"Rania",
        lastname:"Slimene"
    })
})
app.use(cors());
app.use("/",router);  
app.use("/service",serviceRoute)
app.use("/categorie",categorieRoute)
app.use("/DemandeService",demandeServiceRoute)
app.use("/message",messageRoute)
app.use("/client",clientRoute)
app.use("/fournisseur",fournisseurRoute)
app.use("/admin",adminRoute)
app.use("/login",loginRoute)
app.use("/payment",stripeRoute)
 

app.listen (5000,(console.log("the server is runing the port 5000")))
mongoose.connect("mongodb+srv://raniaslimene:raniaslimene@cluster0.txrombs.mongodb.net/?retryWrites=true&w=majority",console.log("connected to database"))






