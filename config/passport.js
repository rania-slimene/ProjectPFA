/*
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const session = require('express-session');

const Fournisseur = require('./models/Fournisseur');

// Initialisation de l'application Express
const app = express();

// Configuration de Passport.js
passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'motDePasse' },
    async (email, motDePasse, done) => {
      try {
        const user = await Fournisseur.findOne({ email });
        if (!user) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }
        const isMatch = await user.comparePassword(motDePasse);
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Fournisseur.findById(id, (err, user) => {
    done(err, user);
  });
});*/
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Fournisseur= mongoose.model("fournisseur");
const Keys = require("./key");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = Keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new jwtStrategy(opts, (jwt_payload, done) => {
      Fournisseur.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
