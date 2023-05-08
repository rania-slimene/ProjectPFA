const router =require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY)
const dotenv = require('dotenv').config()
router.post("/",(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:'usd',
    }, {
        // Ajouter l'en-tête Authorization avec la clé d'API
        auth: {
            bearer: process.env.STRIPE_KEY
        }
    }).then((stripeRes)=>{
        res.status(200).json(stripeRes);
    }).catch((stripeErr)=>{
        res.status(500).json(stripeErr);
    });
});
router.post("/", async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
      }, {
        auth: {
          bearer: process.env.STRIPE_KEY
        }
      });
      res.status(200).json(charge);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });
       





module.exports =router;