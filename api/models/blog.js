var Schema = require('../../node_modules/mongoose/lib').Schema; 
var Comment = require('./comment');

//set up schemas
var blogSchema = new Schema({
	id: Number,
    url: String,
	title: String,
    preview: String,
	body: String,
	active: Boolean,
	//comments: [Comment],
    comments: [{
        id: Number,
        name: String,
        email: String,
        body: String,
        created: {type: Date, default: Date.now}
    }],
	tags: [String],
	created: {type: Date, default: Date.now}
});

module.exports = db.model('BlogPost', blogSchema);