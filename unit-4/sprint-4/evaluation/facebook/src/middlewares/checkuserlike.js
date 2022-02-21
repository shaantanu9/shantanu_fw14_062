const PostLike = require('../models/postLike.model');

module.exports = async(req, res, next) => {
    
    const postList = await PostLike.find({user_id: req.user.id})
    if(!postList) {
        console.log("Post Get Like by User")
        return next();
    }
    else{
        await PostLike.deleteOne({user_id:req.user.id})
        return res.send("You dislike the Post")
    }
};
