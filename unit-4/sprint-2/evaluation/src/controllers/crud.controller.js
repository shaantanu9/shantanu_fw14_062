const getall = (model) => async(req, res)=>{
    try{
        const user = await model.find().lean();
        res.send(user);
    }catch(err){
        res.send(err.message);
    }

}





module.exports = (model) =>{
    return {
        getall: getall(model),
    }
}