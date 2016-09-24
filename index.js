const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const passengerReq = require('./models/passenger.js');
const flightReq = require('./models/flight.js');
const terminalReq = require('./models/terminal.js');
const airportReq = require('./models/airport.js');

const app = express(); //initiatilizes it, app is the main object of our project

//init middleware
app.use(bodyParser.json()); //middleware
app.use(bodyParser.urlencoded({extended: true}));

//Connect MongoDB
const db = 'mongodb://localhost/hkairport';
mongoose.connect(db);

console.log('IT FINALLY WORKS!!');

// var flight1 = Flight({
// 	from: 'CDG France',
// 	to: 'JFK New-York',
// 	airline: 'American Airlines',
// 	passengers: []
// });

// flight1.save(function(err){
// 	if(err) {
// 		console.log(err);
// 		return;
// 	};
// 	console.log('flight1 Created');
// });

// var flight2 = Flight({
// 	from: 'Heathrow UK',
// 	to: 'JFK New-York',
// 	airline: 'British Airways',
// 	passengers: []
// });

// var airport1 = Airport({
// 	name: 'JFK',
// 	country: 'USA',
// 	terminals: [],
// 	opened: new Date('06.29.1985')
// })

// var terminal1 = Terminal({
// 	name: "Terminal 1",
// 	flights: [flight1,flight2],
// 	capacity: 234324
// });

