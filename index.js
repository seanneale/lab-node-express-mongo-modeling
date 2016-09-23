const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

const app = express(); //initiatilizes it, app is the main object of our project

//init middleware
app.use(bodyParser.json()); //middleware
app.use(bodyParser.urlencoded({extended: true}));

//Connect MongoDB
const db = 'mongodb://localhost/hkairport';
mongoose.connect(db);

//require('./controller/candyController');