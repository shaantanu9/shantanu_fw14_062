const mongoose = require('mongoose');

const fixedSchema = new mongoose.Schema({ 

    "account_number":{  required:true, type: Number, unique: true},
    "balance":{  required:true, type: Number }, 
    "interestRate":{  required:true, type: Number }, 
    "startDate":{  required:true, type: String }, 
    "maturityDate":{ required:true, type: String },
    "user_id":{ required:true, type: mongoose.Schema.Types.ObjectId,ref:"user"}

},
{
    versionKey:false, timestamps:true
})


module.exports = mongoose.model('fixed',fixedSchema)