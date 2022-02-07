const getall = (model) => async(req, res)=>{
    // console.log(model, typeof(model));

    try{
        const user = await model.find().populate({path:'user_id', select:{"firstName":1}}).lean();
        res.send(user);
    }catch(err){
        res.send(err.message);
    }

}


const createAccount = (model) => async(req, res)=>{

    try {

        const item = model.create(mas)
        const master = Master.create(mas)
        res.send(master)
    } catch (error) {
        res.send(error.message)
    }

}



module.exports = (model) =>{
    return {
        getall: getall(model),
        createAccount: createAccount(model)
    }
}