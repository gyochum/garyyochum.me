var settings = require('../settings');
var request = require('request');
var querystring = require('querystring');
var jwt = require('jsonwebtoken');

exports.authorize = function(req, response, next) {
    response.redirect(settings.oauth.providers.github.authorizeUrl + '?' + querystring.stringify({
            client_id: settings.oauth.providers.github.clientId,
            redirect_uri: settings.oauth.providers.github.accessTokenUrl,
            scope: settings.oauth.providers.github.scope
        })
    );
}

exports.authenticate = function(req, response, next){
    var code = req.query.code;
    
    if(code){
        request({
            method: 'POST', 
            url: settings.oauth.providers.github.authenticateUrl,
            json: true,
            body: {
                client_id: settings.oauth.providers.github.clientId,
                client_secret: settings.oauth.providers.github.clientSecret,
                code: code                
            }
        }, function(error, r, body){            
            var token = r.body.access_token;
            
            if(token){
                request({
                    method: 'GET',
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36',
                        'Authorization': "Bearer " + token
                    },
                    url: 'https://api.github.com/user'
                }, function(err, r, body){
                   var profile = {
                       id: r.body.id,
                       token: token,
                       login: r.body.login ,
                       avatar: r.body.avatar_url 
                   };
                   
                   //create jwt
                   var token = jwt.sign(profile, settings.oauth.secret, {
                      expiresIn: 7200 
                   });
                    
                   response.writeHead(302, {
                    'Location': 'http://127.0.0.1:8080/src/#/blogs?token=' + token   
                   });
                   response.end();
                });
                
                
            }
        });
    }
}