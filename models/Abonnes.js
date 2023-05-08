
const mongoose = require("mongoose")

const Abonnes = mongoose.Schema({ 
    plan:{
        type : String,
        required:true,
        maxLength:30,
        minLength:2 
    },
    email:{
        type : String,
        required:false,
        maxLength:30,
        minLength:2 
    },
    payment_method:{
        type : Number,
        required:true,
    }
})
module.exports=mongoose.model( "Abonnes",Abonnes)