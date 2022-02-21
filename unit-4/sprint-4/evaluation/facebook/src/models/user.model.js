const mongoose = require('mongoose')
const joi = require('joi')
const joigoose = require('joigoose')(mongoose)
const bcrypt = require('bcryptjs');

const joiSchema = joi.object().keys({

        "firstName": joi.string().min(3).max(30).required(),
        "lastName": joi.string().min(3).max(30).required(),
        "age": joi.number().integer().min(1).max(150).required(),
        "email": joi.string().email().required(),
        "password": joi.string().alphanum().required(),
        "pic": joi.string().required()
}, {
        timestamps:true
})

const UserSchema = new mongoose.Schema(joigoose.convert(joiSchema))

// If new Password Encrypt it
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  var hash = bcrypt.hashSync(this.password, 8);

  this.password = hash;

  console.log(hash);
  console.log(this.password);

  return next();
});


// Check the encrypted password
UserSchema.methods.checkpassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};




// mongoose.model('user', mongooseSchema)

module.exports = mongoose.model("user",UserSchema)
