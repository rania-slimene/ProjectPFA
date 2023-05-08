const mongoose = require("mongoose")

const Categorie = mongoose.Schema({
    nomCategorie:{
        type : String,
        required:true,
        maxLength:30,
        minLength:2 
    },
    image:{
        type:String 
    },
    services: [
        { 
          nomService: {
            type: String,
            required: true
          },
          description: {
            type: String,
            required: true
          },
         
        }
      ]
})
module.exports=mongoose.model("Categorie",Categorie)