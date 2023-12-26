const dataModel= require('../Models/dataModel');
const createData= async function (req,res){
    try {
    const data= req.body;
    await dataModel.create(data);
    return res.status(201).send({status:"true",message:"notes submitted successfully"});
    } catch (error) {
        if(error.message.includes('validation')){
            return res.status(400).send({status:false, message:error.message});
        }else if(error.message.includes('duplicate')){
            return res.status(400).send({status:false,message:error.message});
        }else{
            return res.status(500).send({status:false, message:"Internal sever error"});
        }
    }
}
module.exports= createData;