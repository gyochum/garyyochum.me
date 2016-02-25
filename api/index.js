var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var jwt = require('jsonwebtoken');
var settings = require('./settings');
var api = express();

api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

//enable CORS
api.use(function(request, response, next){
	response.header('Access-Control-Allow-Origin', '*');
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    response.header('Content-Type', 'application/json');
	next();
});

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

//verify token for admin routes
api.use(function(request, response, next){
   var token = request.headers['x-access-token'];
    
    if(token){        
        console.log(settings.oauth.secret);
        jwt.verify(token, settings.oauth.secret, function(error, decoded){            
           if(error){
               console.log(error);
               response.json({
                   success: false,
                   message: 'could not suthenticate your fake ass token'
               });
           }
           else{
               request.decoded = decoded;
               next();
           } 
        });
    }
    else{
        //response.status(400);
        response.json({
            success: false,
            message: 'no token provided'
        });
    } 
});

//admin routes
api.post('/api/blogs', blogRepository.save);
api.put('/api/blogs/:id', blogRepository.update);
api.delete('/api/blogs/:id', blogRepository.delete);
api.put('/api/comments/:id', blogRepository.updateComment);

//start server
api.listen(3000);