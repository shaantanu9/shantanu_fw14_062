const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

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


module.exports = mongoose.model("user", UserSchema);
