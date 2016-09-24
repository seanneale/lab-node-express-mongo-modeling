const mongoose = require('mongoose');
var flightReq = require('./flight.js');

var terminalSchema = new mongoose.Schema({
	name: String,
	flights: [flightReq],
	capacity: Number
});

var Terminal = mongoose.model('Terminal', terminalSchema);

exports = Terminal.Schema;