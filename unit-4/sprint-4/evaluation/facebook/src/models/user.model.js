const mongoose = require('mongoose')
const joi = require('joi')
const joigoose = require('joigoose')(mongoose)

const joiSchema = joi.object().keys({

        "firstName": joi.string().min(3).max(30).required(),
        "lastName": joi.string().min(3).max(30).required(),
        "age": joi.number().integer().min(1).max(150).required(),
        "email": joi.string().email().required(),
        "pic": joi.string().required()
}, {
        timestamps:true
})

const UserSchema = new mongoose.Schema(joigoose.convert(joiSchema))

// mongoose.model('user', mongooseSchema)

module.exports = mongoose.model("user",UserSchema)
