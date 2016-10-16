var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

//set up schemas
var commentSchema = new Schema({
	id: Number,
    name: String,
	email: String,
	body: String,
    isEnabled: Boolean,
	created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Comment', commentSchema);