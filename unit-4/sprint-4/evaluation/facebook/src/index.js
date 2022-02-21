const express = require('express');  
const app = express();
app.use(express.json());

const connect = require('./configs/db.js');

/// Models Ends
const {signup, login} = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
const postController = require('./controllers/post.controller');
const commentController = require('./controllers/comment.controller');

/////////////////
app.use('/comment', commentController);

app.use('/user', userController);
app.use('/post', postController);

app.post('/signup', signup)
app.post('/login', login)
////////////////////////////////

// Start Listening the Server

port = process.env.PORT || 3000;

app.listen(port,async()=>{
await connect();
console.log(`Listening on ${port}`);
});
