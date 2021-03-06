const express = require('express'); 
const router = express.Router();
const PostLike = require('../models/postLike.model');
const path = require('path');
const upload = require('../middlewares/file-uploads');

const checkuserlike = require('../middlewares/checkuserlike');
const crudController = require('./crud.controller');


router.patch('/:id',crudController(PostLike).patch)

router.post('',checkuserlike,crudController(PostLike).post)

router.delete('/:id',crudController(PostLike).deleteOne)

router.get('',crudController(PostLike).get)


module.exports =router;