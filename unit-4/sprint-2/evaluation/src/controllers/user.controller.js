const express = require('express');

const router = express.Router();

// Model and Schema
const User = require('../models/user.model')
const Master = require('../models/masterAccount.model')

// Export CrudController
const crudController = require('./crud.controller')

// Routers



// router.get('',crudController(User).getall)

router.get('',async(req,res)=>{
    try{
        const user = await User.find().lean();
        res.send(user);
        

    }catch(err){
        res.send(err.message);
    }   
})

//post

router.post('',async(req, res)=>{

    try {
        const user = User.create(req.body)
        res.send(user)
        createMasterAccount();    
    } catch (error) {
        res.send(error.message)
    }

})
 
 // For Every User the Master Account is created BElow

 async function createMasterAccount(){

    const m = await User.find()
    userid = m[m.length-1]._id+"";
    console.log(userid)
    await Master.create({"user_id":userid})
}



// Exports

module.exports = router;