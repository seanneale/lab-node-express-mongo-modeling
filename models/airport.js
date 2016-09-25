const mongoose = require('mongoose');
var terminalReq = require('./terminal.js');

var airportSchema = new mongoose.Schema({
	name: String,
	country: String,
	terminals: ['Terminal'],
	opened: Date
},{
	timestamps: true
});

var Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;