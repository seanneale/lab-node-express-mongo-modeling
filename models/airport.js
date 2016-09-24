const mongoose = require('mongoose');
var terminalReq = require('./terminal.js');

var airportSchema = new mongoose.Schema({
	name: String,
	country: String,
	terminals: [terminalReq],
	opened: Date
});

var Airport = mongoose.model('Airport', airportSchema);

exports = Airport.Schema;