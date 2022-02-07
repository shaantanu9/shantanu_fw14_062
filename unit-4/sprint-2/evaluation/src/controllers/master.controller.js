const express = require('express');

const router = express.Router();

// Model and Schema
const Master = require('../models/masterAccount.model')

// Export CrudController
const crudController = require('./crud.controller')

// Routers

router.get('',crudController(Master).getall)


//


// Exports

module.exports = router;