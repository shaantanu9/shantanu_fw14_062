const express = require('express');

const router = express.Router();

// Model and Schema
const Branch = require('../models/branch.model')

// Export CrudController
const crudController = require('./crud.controller')

// Routers

router.get('',async(req,res)=>{
    try{
        const user = await Branch.find().lean();
        res.send(user);
    }catch(err){
        res.send(err.message);
    }   
})



// Exports

module.exports = router;