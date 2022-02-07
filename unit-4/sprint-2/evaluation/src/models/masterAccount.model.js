const mongoose = require('mongoose');

const masterSchema = new mongoose.Schema({ 

 "balance":{required:true,type:String}

},
{
    versionKey:false, timestamps:true
})


module.exports = mongoose.model('master',masterSchema)