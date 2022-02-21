const mongoose = require('mongoose');   

postSchema = new mongoose.Schema({ 
    "body":{type:String, required:true, unique:true},
    "like":{type:Number, required:true},
    "pic":{type:String, required:true},
    "user_id": {type:mongoose.Schema.Types.ObjectId,ref:'user',required:false}
    },{
    "versionKey":false, timestamps:true
})

module.exports =  mongoose.model('post',postSchema)

