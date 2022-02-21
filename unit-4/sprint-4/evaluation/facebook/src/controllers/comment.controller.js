const express = require('express'); 
const router = express.Router();
const Comment = require('../models/comment.model');
const path = require('path');
const upload = require('../middlewares/file-uploads');

console.log(upload.single(),"upload")

const crudController = require('./crud.controller');


router.patch('/:id',crudController(Comment).patch)

router.post('',crudController(Comment).post)

router.delete('/:id',crudController(Comment).deleteOne)

router.get('',crudController(Comment).get)


module.exports =router;