var Schema = require('../../node_modules/mongoose/lib').Schema; 

//set up schemas
var commentSchema = new Schema({
	id: Number,
    name: String,
	email: String,
	body: String,
    isEnabled: Boolean,
	created: {type: Date, default: Date.now}
});

module.exports = db.model('Comment', commentSchema);