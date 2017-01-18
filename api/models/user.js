var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var userSchema = new Schema({
	id: Number,
	name: String,
    active: Boolean
});

module.exports = mongoose.model('User', userSchema);