const mongoose = require('mongoose');

const savingSchema= new mongoose.Schema({ 

    "account_number": {  required: true, type: String},
    "balance": {  required: true, type: Number},
    "interestRate": {  required: true, type: Number},
    "user_id": { required: true, type: mongoose.Schema.Types.ObjectId,ref:'user'},
    "relationShipManager":{ required: false, type: mongoose.Schema.Types.ObjectId, ref:"user"},

},
{
    versionKey:false, timestamps:true
})


module.exports = mongoose.model('saving',savingSchema)