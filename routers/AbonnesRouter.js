const express=require('express');
const router=express.Router();
const Abonnes = require("../models/Abonnes")

router.post('/subscribe', async (req, res) => {
    const { plan, email, payment_method } = req.body;
  
    // Créer un client Stripe
    const customer = await stripe.customers.create({
      email: email,
      payment_method: payment_method
    });
  
    // Créer un abonnement
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ plan: plan }]
    });
  
    res.json({ subscription });
  });
  