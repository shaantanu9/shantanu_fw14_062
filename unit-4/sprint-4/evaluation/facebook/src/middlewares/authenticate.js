const jwt = require('jsonwebtoken');
require('dotenv').config


const verifyToken = (token) => { 
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err,user)=>{
            if (err) return reject(err)
            resolve(user)
        })
    })
 }

module.exports = async(req, res) => {
    
    if(!req.headers.authorization) return res.status(403).send("Token not provided")
    if(!req.headers.authorization.startsWith("Bearer")) return res.status(403).send("Wrong Token provided")

    var token = req.headers.authorization.split(" ")[1]

    verifiedToken = verifyToken(token);
    

};
