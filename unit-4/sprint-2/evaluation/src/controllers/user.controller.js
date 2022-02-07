const express = require('express');

const router = express.Router();

// Model and Schema
const User = require('../models/user.model')

// Export CrudController
const crudController = require('./crud.controller')

// Routers

router.get('',crudController(User).getall)

//post

router.post('',async(req, res)=>{

    try {
        const user = User.create(req.body)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }

})


// Exports

module.exports = router;