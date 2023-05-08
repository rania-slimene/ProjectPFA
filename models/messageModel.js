const mongoose=require("mongoose");
const Message=mongoose.Schema({
    contenu:{
        type:String,
        required:true,
        minLength:2
    },
    dateEnvoi:{
        type:Date 
        
    },
    sender:{  
        type:Number,
        required:true
    },
    ref:{
        type:String
    }

})

module.exports=mongoose.model("message",Message);
