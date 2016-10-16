var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var errorSchema = new Schema({
	name: String,
	message: String,
	stack: String
});

module.exports = mongoose.model('ApplicationError', errorSchema);