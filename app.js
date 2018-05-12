//Lesson 31 - 37: To-Do List Application

//Requires
const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();

//Template engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('public'));

//Call todoController.js
todoController(app);

//Port
app.listen(3000);
console.log('Listening to port 3000');


/* Notes
a. <% %> is for Js
b. <%= %> is for stuff you want rendered onto the webpage

*/
