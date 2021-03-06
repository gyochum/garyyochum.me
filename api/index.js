var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var jwt = require('jsonwebtoken');
var eJwt = require('express-jwt');
var cors = require('cors');
var helmet = require('helmet');
var passport = require('passport');
var session = require('express-session');
var passportConfig = require('./config/passport');
var googleStrategy = require('passport-google-oauth20').Strategy;
var settings = require('./config/settings');
var applicationError = require('./models/error');
var api = express();

//get repository modules
var blogRepository = require('./repository/blogRepository');
var oauthRepository = require('./repository/oauthRepository');



api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

//enable CORS
api.use(cors());

//extra api protection
api.use(helmet());

//set up middleware to verify jwt
/*api.use(eJwt({
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
        
        return result;
  })      
);*/

//open db connection
mongoose.connect(settings.db(), { config: { autoIndex: false } });
mongoose.connection.on('error', console.log);

//passport config
api.use(passport.initialize());
passportConfig(passport);

//public routes
api.get('/api/blogs', blogRepository.all);
api.get('/api/blogs/:url', blogRepository.detail);
api.post('/api/comment', blogRepository.addComment);
api.get('/api/settings', oauthRepository.settings);

//public oauth routes
api.get('/api/login/google', passport.authenticate('google', { scope: 'email', failureRedirect : '/', successRedirect: '/api/login/google/verify' }));
/*api.get('/api/login', function(req, res){
    res.send('login called'); 
});*/
api.get('/api/login/github', passport.authenticate('github', { scope: 'email'}));

api.get('/api/login/google/callback', function(req, res){
   console.log('callback'); 
});

api.get('/api/login/github/callback', function(req, res){
   console.log('callback'); 
});

api.get('/api/login/google/verify', function(req, res){
   console.log('verify'); 
});

api.get('/api/login/github/verify', function(req, res){
   console.log('verify'); 
});

//admin routes
api.post('/api/blogs', blogRepository.save);
api.put('/api/blogs/:id', blogRepository.update);
api.delete('/api/blogs/:id', blogRepository.delete);
api.put('/api/comments/:id', blogRepository.updateComment);

//set up error handling function
api.use(function(error, request, response, next){
   console.log(error);
    applicationError.create({
        name: error.name,
        message: error.message,
        stack: error.stack
    }, function(err, doc){
        return response.json({
           success: false,
           message: err.message,
           data: null
        });
    });
});

//start server
api.listen(3000);