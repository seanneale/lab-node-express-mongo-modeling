const mongoose = require('mongoose');
var passengerReq = require('./passenger.js');

var flightSchema = new mongoose.Schema({
	from: String,
	to: String,
	airline: String,
	passengers: ['Passenger']
},{
	timestamps: true
});

var Flight = mongoose.model('Flight', flightSchema);

//exports.Schema = flightSchema;
module.exports = Flight;