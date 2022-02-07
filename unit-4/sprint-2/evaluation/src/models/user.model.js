const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 

    "firstName": {required:true, type: String},
    "middleName": {required:false, type:String},
    "lastName": {required:true, type: String},
    "age": {required:true, type: Number},
    "email": {required:true, type: String },
    "address": { required:true, type: String },
    "gender": { required:false, type: String, default:'Female'},
    "type2": {required:false, default:"Customer",type:String},
    "type": {required:false, type:mongoose.Schema.Types.ObjectId},


},
{
    versionKey:false, timestamps:true
})


module.exports = mongoose.model('user',userSchema)