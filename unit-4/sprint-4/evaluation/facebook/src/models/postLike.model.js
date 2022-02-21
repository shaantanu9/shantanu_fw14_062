const mongoose = require('mongoose');   

PostlikeSchema = new mongoose.Schema({ 
    "user_id": {type:mongoose.Schema.Types.ObjectId,ref:'user',required:false}
    "post_id": {type:mongoose.Schema.Types.ObjectId,ref:'post',required:false}
    },{
    "versionKey":false, timestamps:true
})

module.exports =  mongoose.model('postlike',PostlikeSchema)

