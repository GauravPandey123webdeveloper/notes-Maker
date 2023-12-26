const express = require('express');
const createData= require('../Controllers/dataController');
const router = express.Router();
router.get("/test", function(req,res){
    res.send('My first revision api');
})
router.post('/testpost',createData);
module.exports = router;