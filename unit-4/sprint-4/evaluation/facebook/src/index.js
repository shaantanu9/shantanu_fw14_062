const express = require('express');  
const app = express();
app.use(express.json());

const connect = require('./configs/db.js');

/// Models Ends

const userController = require('./controllers/user.controller');
const postController = require('./controllers/post.controller');

/////////////////

app.use('/user', userController);
app.use('/post', postController);

////////////////////////////////

// Start Listening the Server

port = process.env.PORT || 3000;

app.listen(port,async()=>{
await connect();
console.log(`Listening on ${port}`);
});
