const mongoose = require("mongoose")
const Utilisateur = require("./utilisateurModel")
const client = mongoose.Schema({
ville:{
    type:String,
    required : true
},
codePostal:{
    type:String,
    required : true,
    maxLength:4,
    minLength:4
 
} 
})
class Client extends Utilisateur{
    constructor(nom, prenom, nTel, email, login, motDePasse,localisation,photo, ville, codePostal){
    super(nom,prenom,nTel,email,login,motDePasse,localisation,photo);
    this.ville = ville
    this.codePostal = codePostal;
}}
 
const clientModel = Utilisateur.discriminator('client', client);
module.exports = clientModel;