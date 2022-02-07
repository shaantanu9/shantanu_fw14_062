const express = require('express');

const router = express.Router();

// Model and Schema
const Fixed = require('../models/fixedAccount.model')

// Export CrudController
const crudController = require('./crud.controller')

// Routers

router.get('',crudController(Fixed).getall)

// post routes

router.post('', async (req,res) => {

    try {
        const fixed = await Fixed.create(req.body);
        res.send(fixed);
    } catch (error) {
        res.send(error.message)        
    }

})


// Exports

module.exports = router;