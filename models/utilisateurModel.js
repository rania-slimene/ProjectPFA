const mongoose =require("mongoose")
const Utilisateur = mongoose.Schema({
    
nom:{
        type: String,
        required:true,
        maxLength:30,
        minLength:2
    },

prenom: {
    type:String,
    required:true,
    maxLength:30,
    minLength:2
},

nTel:{ 
    type:Number,
    required:true,
    unique:true,
    maxLength:8,
    minLength:8
},
email:{
    type:String,
    required:true,
    unique:true,
    maxLength:50,
    minLength:8
},   
login:{  
    type:String,
    required:true,
    maxLength:30,
    minLength:5
},
motDePasse:{
    type:String,
    required:true,
    maxLength:60,
    minLength:6
},

localisation:{
    type:String,
    required:true
},
photo: {
    type: String // Chemin du fichier de l'image ou une URL
}
})
module.exports=mongoose.model("Utilisateur",Utilisateur);