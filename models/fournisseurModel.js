const mongoose = require("mongoose")
const Utilisateur = require("./utilisateurModel")
const fournisseur = mongoose.Schema({

specialite:{
    type:String,
    required : true,
    maxLength:30,
    minLength:3

},
   

})
class Fournisseur extends Utilisateur{
    constructor(nom, prenom, nTel, email, login, motDePasse,localisation,photo, specialite){
    super(nom,prenom,nTel,email,login,motDePasse,localisation,photo);
    this.specialite = specialite
    
    
}}
 
const fournisseurModel = Utilisateur.discriminator('fournisseur', fournisseur);
module.exports = fournisseurModel;