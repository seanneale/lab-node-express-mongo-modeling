const mongoose = require('mongoose');
var passengerReq = require('./passenger.js');

var flightSchema = new mongoose.Schema({
	from: String,
	to: String,
	airline: String,
	passengers: [passengerReq]
});

var Flight = mongoose.model('Flight', flightSchema);

exports = Flight.Schema;