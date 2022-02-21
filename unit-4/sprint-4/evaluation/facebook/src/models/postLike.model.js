const mongoose = require('mongoose')
const joi = require('joi')
const joigoose = require('joigoose')(mongoose)

const joiSchema = joi.object().keys({

        "body": joi.string(),
        "likes": joi.number().default(0),
        "pic": joi.string().required()
}, {
        timestamps:true
})

const PostSchema = new mongoose.Schema(joigoose.convert(joiSchema))

// mongoose.model('Post', mongooseSchema)

module.exports = mongoose.model("post",PostSchema)
