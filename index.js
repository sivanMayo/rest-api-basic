const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use('/users', routes.user);
app.use('/messages', routes.message);

app.listen(port, ()=> {console.log("listening")})