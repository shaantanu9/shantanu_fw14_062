const express = require('express'); 
const router = express.Router();
const Post = require('../models/post.model');
const path = require('path');
const upload = require('../middlewares/file-uploads');

console.log(upload.single(),"upload")

const crudController = require('./crud.controller');


router.patch('/:id',crudController(Post).patch)

router.post('',crudController(Post).post)

router.delete('/:id',crudController(Post).deleteOne)

router.post('/upload', upload.single("pic"), async(req, res) => {

    try{
        req.body.pic = req.file.path
        const post = await Post.create(req.body)
        // res.send(req.file.path)
        res.send(post)
    }
    catch(err){console.log(err.message); res.send(err.message)}
})


router.get('',async(req, res)=>{



const total =  await Post.count()
const totalPages = Math.ceil(+total/10)

const post = await Post.find().

res.json({total,totalPages, re:req.query})


})


module.exports =router;