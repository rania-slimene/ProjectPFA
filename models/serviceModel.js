const mongoose = require("mongoose")

const Service = mongoose.Schema({
    nomService:{
        type : String,
        required:true,
        maxLength:30,
        minLength:2 
    },
    description:{
        type:String
    },
    prix:{
        type:Number
    }
})
module.exports=mongoose.model("Service",Service)