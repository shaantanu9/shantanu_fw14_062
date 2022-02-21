const mongoose = require('mongoose');





const mongoose = require('mongoose')
const joi = require('joi')
const joigoose = require('joigoose')(mongoose)

const joiSchema = joi.object().keys({

        "firstName": joi.string().required(),
        "lastName": joi.string().required(),
        "age": joi.string().required(),
        "email": joi.string().required(),
        "pic": joi.string().required()
}, {
        timestamps:true
})

const mongooseSchema = new mongoose.Schema(joigoose.convert(joiSchema))

// mongoose.model('user', mongooseSchema)

module.exports = mongoose.model("user",UserSchema)
