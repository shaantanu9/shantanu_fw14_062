const express = require('express');

const router = express.Router();

// Model and Schema
const User = require('../models/user.model')

// Export CrudController
const crudController = require('./crud.controller')

// Routers

router.get('',crudController(User).getall)



// Exports

module.exports = router;