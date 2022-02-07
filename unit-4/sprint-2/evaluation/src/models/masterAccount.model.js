const mongoose = require('mongoose');

const masterSchema = new mongoose.Schema({ 

    "balance":{required:false,type:String},
    "user_id": {required:true,type:mongoose.Schema.Types.ObjectId, unique:true,ref:"user"},
    "branch_id": {required:false,type:mongoose.Schema.ObjectId,ref:"branch"},
    // "relationShipManager": { required: false, type: mongoose.Schema.Types, ref:"user"}
    "relationShipManager":{ required: false, type: mongoose.Schema.Types.ObjectId, ref:"user"},

},
{
    versionKey:false, timestamps:true
})


module.exports = mongoose.model('master',masterSchema)