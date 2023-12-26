const mongoose = require('mongoose');
const dataSchema= new mongoose.Schema({
    data:String
},{timestamps:true})
module.exports= mongoose.model("userData",dataSchema);