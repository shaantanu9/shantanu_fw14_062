const express = require('express');

const router = express.Router();

// Model and Schema
const Branch = require('../models/branch.model')

// Export CrudController
const crudController = require('./crud.controller')

// Routers

router.get('',crudController(Branch).getall)



// Exports

module.exports = router;