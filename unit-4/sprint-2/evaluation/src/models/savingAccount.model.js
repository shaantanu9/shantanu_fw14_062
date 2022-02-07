const mongoose = require('mongoose');

const savingSchema= new mongoose.Schema({ 

    "account_number": {  required: true, type: String},
    "balance": {  required: true, type: Number},
    "interestRate": {  required: true, type: Number},
},
{
    versionKey:false, timestamps:true
})


module.exports = mongoose.model('saving',savingSchema)