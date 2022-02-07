const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({ 

    "name" : {required:true, type: String},
    "address" : {required:true, type: String},
    "IFSC" : {required:true, type: String },
    "MICR" : {required:true, type: String }
},
{
    versionKey:false, timestamps:true
})


module.exports = mongoose.model('branch',branchSchema)