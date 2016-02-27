var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var jwt = require('jsonwebtoken');
var eJwt = require('express-jwt');
var settings = require('./settings');
var api = express();

api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

//enable CORS
api.use(function(request, response, next){
	response.header('Access-Control-Allow-Origin', '*');
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    response.header('Content-Type', 'application/json');
	next();
});

//set up middleware to verify jwt
api.use(eJwt({secret: settings.oauth.secret}).unless({
    path: [
        { url: '/api/blogs', methods: ['GET']}        
    ]    
}));

//open db connection
var uri = 'mongodb://127.0.0.1/gy';
global.db = mongoose.createConnection(uri);

//get repository modules
var blogRepository = require('./repository/blogRepository');
var oauthRepository = require('./repository/oauthRepository');

//public routes
api.get('/api/blogs', blogRepository.all);
api.get('/api/blogs/:id', blogRepository.detail);
api.post('/api/comments', blogRepository.addComment);
api.get('/api/authorize', oauthRepository.authorize);
api.get('/api/authenticate', oauthRepository.authenticate);

//admin routes
api.post('/api/blogs', blogRepository.save);
api.put('/api/blogs/:id', blogRepository.update);
api.delete('/api/blogs/:id', blogRepository.delete);
api.put('/api/comments/:id', blogRepository.updateComment);

//set up error handling function
api.use(function(error, request, response, next){
   console.log(error.name);
   response.status(500).send('error!!'); 
});

//start server
api.listen(3000);