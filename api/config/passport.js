var googleStrategy = require('passport-google-oauth20').Strategy;
var githubStrategy = require('passport-github2').Strategy;
var oauthRepository = require('../repository/oauthRepository');
var settings = require('./settings');

module.exports = function(passport){

	var google = settings.oauth.providers.google();	
	passport.use(new googleStrategy({
		clientID: google.clientId,
		clientSecret: google.clientSecret,
        callbackURL: google.callbackUrl,
        passReqToCallback: true
	}, oauthRepository.authenticateGoogle));
	
	var github = settings.oauth.providers.github();
	passport.use(new githubStrategy({
		clientID: github.clientId,
		clientSecret: github.clientSecret,
        callbackURL: github.callbackUrl,
        passReqToCallback: true
	}, oauthRepository.authenticateGithub));
	
};