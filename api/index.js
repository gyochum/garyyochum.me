var express = require('express');
var api = express();

//enable CORS
api.use(function(request, response, next){
	response.header('Access-Control-Allow-Origin', '*');
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

api.get('/api/blogs', function(request, response){
	var results = [
		"one",
		"two",
		"three"	
	];
		
	response.send(results);
});

api.listen(3000);