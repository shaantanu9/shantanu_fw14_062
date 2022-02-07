const express = require('express');

const router = express.Router();

// Model and Schema
const Saving = require('../models/savingAccount.model')

// Export CrudController
const crudController = require('./crud.controller')

// Routers

router.get('',crudController(Saving).getall)

// Create Saving Account

router.post('',crudController(Saving).createAccount)

// Exports

module.exports = router;