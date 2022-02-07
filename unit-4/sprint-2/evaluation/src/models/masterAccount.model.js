const mongoose = require('mongoose');

const masterSchema = new mongoose.Schema({ 

 "balance":{required:true,type:String}
 "user_id": {required:true,type:mongoose.Schema.Types.ObjectId}

},
{
    versionKey:false, timestamps:true
})


module.exports = mongoose.model('master',masterSchema)