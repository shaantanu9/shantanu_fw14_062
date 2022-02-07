const express = require('express'); 

const app = express();
const connect = require('./configs/db');

// Import controllers

const userController = require('./controllers/user.controller')
const branchController = require('./controllers/branch.controller')
const masterController = require('./controllers/master.controller')
const savingController = require('./controllers/saving.controller')
const fixedController = require('./controllers/fixed.controller')

// models 

app.use(express.json());

// controllers Routing

app.use('/user',userController);
app.use('/branch',branchController);
app.use('/master',masterController);
app.use('/saving',userController);
app.use('/fixed',fixedController);


// lisen

app.listen('5000', async()=>{ 

    await connect();
    console.log("listening on");
})