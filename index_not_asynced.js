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

var passengerReq = require('./models/passenger');
var flightReq = require('./models/flight');
var terminalReq = require('./models/terminal');
var airportReq = require('./models/airport');

var flight1 = flightReq({
	from: 'CDG France',
	to: 'JFK New-York',
	airline: 'American Airlines',
	passengers: []
});

flight1.save(function(err){
	if(err) {
		console.log(err);
		return;
	};
	console.log('flight1 Created');
});


var flight2 = flightReq({
	from: 'Heathrow UK',
	to: 'JFK New-York',
	airline: 'British Airways',
	passengers: []
});

flight2.save(function(err){
	if(err) {
		console.log(err);
		return;
	};
	console.log('flight2 Created');
});


var airport1 = airportReq({
	name: 'JFK',
	country: 'USA',
	terminals: [],
	opened: new Date('06.29.1985')
})

airport1.save(function(err){
	if(err) {
		console.log(err);
		return;
	};
	console.log('airport1 Created');
	var terminal1 = terminalReq({
		name: "Terminal 1",
		flights: [flight1,flight2],
		capacity: 234324
	});

	terminal1.save(function(err){
		if(err) {
			console.log(err);
			return;
		};
		console.log('terminal1 Created');

		airportReq.find({},function(err,airports){
			if(err){
				console.log('DB error', err);
				return;
			}
			airports[0].terminals.push(terminal1);
			console.log(airports[0]);
			console.log(terminal1);
			console.log(flight1);
			console.log(flight2);
		});
		

	});
});





// airportReq.find({},function(err,airports){
// 	if(err){
// 		console.log('DB error', err);
// 		return;
// 	}
// 	airports[0].terminals.push(terminal1);
// 	console.log(airport1);
// });

