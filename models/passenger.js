const mongoose = require('mongoose');

var passengerSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	dob: Date
},{
	timestamps: true
});

var Passenger = mongoose.model('Passenger', passengerSchema);

//module.exports.Schema = passengerSchema;
//console.log(passengerSchema);
module.exports = Passenger;
//console.log(module.exports);
//console.log(exports.Schema);