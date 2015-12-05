var mongoose = require('mongoose');
var express = require('express');
var api = express();

//enable CORS
api.use(function(request, response, next){
	response.header('Access-Control-Allow-Origin', '*');
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

//open db connection
var uri = 'mongodb://127.0.0.1/gy';
global.db = mongoose.createConnection(uri);

//get repository modules
var blogRepository = require('./repository/blogRepository');

//routes
api.get('/api/blogs', blogRepository.getAllBlogs);
api.get('/api/blog/feed', blogRepository.feed);
api.get('/api/blog/:id', blogRepository.getBlog);

//start server
api.listen(3000);