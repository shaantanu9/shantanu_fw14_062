const express = require('express'); 

const app = express();
const connect = require('./configs/db');
// models 




// lisen

app.listen('5000', async()=>{ 

    await connect();
    console.log("listening on");
})