var settings = require('../settings');
var request = require('request');
var querystring = require('querystring');

exports.authenticate = function(req, response, next){
    var code = req.query.code;
    
    if(code){
        request({
            method: 'POST', 
            url: settings.social.github.authenticateUrl,
            json: true,
            body: {
                client_id: settings.social.github.clientId,
                client_secret: settings.social.github.clientSecret,
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
                   response.send(r); 
                });
            }
        });
    }
}

exports.authorize = function(req, response, next) {
    response.redirect(settings.social.github.authorizeUrl + '?' + querystring.stringify({
            client_id: settings.social.github.clientId,
            redirect_uri: settings.social.github.accessTokenUrl
        })
    );
    
    
    /*request({
        method: 'GET',
        url: settings.social.github.authorizeUrl,
        qs: {
            client_id: settings.social.github.clientId,
            redirect_uri: settings.social.github.authorizeCodeUrl
        },
        followRedirect: true
    }, function(e, r, b){
        console.log(b);
    });*/
}