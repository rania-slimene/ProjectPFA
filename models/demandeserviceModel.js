const mongoose = require("mongoose")

const DemandeService = mongoose.Schema({
    titre:{
        type : String,
        required:true,
        maxLength:30, 
        minLength:2 
    },
    description:{
        type : String,
        required:true,
        maxLength:30,
        minLength:2 
    },
    prixMax:{
        type :Number,
        required:true,
    }
})
module.exports=mongoose.model("DemandeService",DemandeService)