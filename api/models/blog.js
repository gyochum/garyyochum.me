var Schema = require('mongoose').Schema; 

var blogSchema = new Schema({
	id: Number,
    url: String,
	title: String,
    preview: String,
	body: String,
	active: Boolean,
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