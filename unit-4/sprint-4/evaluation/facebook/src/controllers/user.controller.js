const express = require('express'); 
const router = express.Router();
const User = require('../models/user.model');
const path = require('path');
const upload = require('../middlewares/file-uploads');

console.log(upload.single(),"upload")

const crudController = require('./crud.controller');

router.get('',crudController(User).get)

router.patch('/:id',crudController(User).patch)

// router.post('',crudController(User).post)

router.delete('/:id',crudController(User).deleteOne)

router.post('', upload.single("pic"), async(req, res) => {

    try{
        var user;
        // user = await User.findOne({email:req.body.email})

        if (user)
         return res.status(400).send({ message: "User Exist Try another Email" });

        req.body.pic = req.file.path
        user = await User.create(req.body)

        // res.send(req.file.path)
        res.send(user)
    }
    catch(err){console.log(err.message); res.send(err.message)}
})

module.exports =router;