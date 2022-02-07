const express = require('express');

const router = express.Router();

// Model and Schema
const Fixed = require('../models/fixedAccount.model')

// Export CrudController
const crudController = require('./crud.controller')

// Routers

router.get('',crudController(Fixed).getall)

// Create a Fixed Account

router.post('',crudController(Fixed).createAccount)




// Exports

module.exports = router;