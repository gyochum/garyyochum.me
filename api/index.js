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
api.use(eJwt({
        secret: settings.oauth.secret,
        getToken: function(request){            
            if(request.headers.authorization && request.headers.authorization.split(' ')[0] === 'Bearer'){                
                return request.headers.authorization.split(' ')[1];
            }
        }
    })
    .unless(function(request){
        var result = false;
        
        //blog routes
        result = request.path.indexOf('/api/blogs') > -1 && (request.method === 'GET' || request.method === 'OPTIONS');
        
        //blog comment routes
        result |= request.path.indexOf('/api/comments') > -1 && request.method === 'POST';
        
        //oauth routes
        result |= request.path.indexOf('/api/settings') > -1 && request.method === 'GET';
        result |= request.path.indexOf('/api/authenticate') > -1 && request.method === 'GET';
        
        console.log('method: ' + request.method);
        console.log('path: ' + request.path);
        console.log('unless: ' + result);
        
        return result;
  })      
);

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
api.get('/api/authenticate', oauthRepository.authenticate);
api.get('/api/settings', oauthRepository.settings);

//admin routes
api.post('/api/blogs', blogRepository.save);
api.put('/api/blogs/:id', blogRepository.update);
api.delete('/api/blogs/:id', blogRepository.delete);
api.put('/api/comments/:id', blogRepository.updateComment);

//set up error handling function
api.use(function(error, request, response, next){
    console.log(error);
   if(error.name === 'UnauthorizedError')
    response.status(403).json({success: false, message: 'you are not authorized to perform this operation'}); 
});

//start server
api.listen(3000);