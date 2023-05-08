const mongoose = require("mongoose")
const Utilisateur = require("./utilisateurModel")
const admin= mongoose.Schema({
})
class Admin extends Utilisateur{
    constructor(nom, prenom, nTel, email, login, motDePasse){
    super(nom,prenom,nTel,email,login,motDePasse);
    
}}
 
const adminModel = Utilisateur.discriminator('admin', admin);
module.exports = adminModel;  