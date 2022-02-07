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
        mas = req.body 
        console.log(req.body);
        const user = User.create(req.body)
        const master = Master.create(mas)
        res.send(master)
    } catch (error) {
        res.send(error.message)
    }

})


// Exports

module.exports = router;