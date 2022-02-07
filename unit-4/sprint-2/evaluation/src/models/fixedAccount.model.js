const mongoose = require('mongoose');

const fixedSchema = new mongoose.Schema({ 

    "account_number":{  required:true, type: String, unique: true},
    "balance":{  required:true, type: String }, 
    "interestRate":{  required:true, type: String }, 
    "startDate":{  required:true, type: String }, 
    "maturityDate":{ required:true, type: String }

},
{
    versionKey:false, timestamps:true
})


module.exports = mongoose.model('fixed',fixedSchema)