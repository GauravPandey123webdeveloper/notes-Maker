const express= require('express');
const mongoose = require('mongoose')
const route= require("./Route/route")
const cors= require('cors');
const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://gp0216716:LHcIWYtwiR7BHw6U@cluster0.ylyfx9i.mongodb.net/textParser?retryWrites=true&w=majority",{useNewUrlParser:true}).then(()=>{console.log("mongodb connected")}).catch((error)=>{
    console.log("connection failed",error);
})
app.use('/',route);
app.listen(process.env.PORT||8080, ()=>{
    console.log("server has started on port: ",process.env.PORT||8080)
})
