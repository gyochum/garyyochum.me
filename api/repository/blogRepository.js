var model = require('../models/blog');
var ObjectId = require('mongoose').Types.ObjectId;

exports.getAllBlogs = function(request, response, next){
	model.find(function(error, results){
		if(error)
			return next(error);
		
		try{
			return response.send(results);	
		}
		catch(e){
			response.send('error: ' + e);
		}
	});	
}

exports.getBlog = function(request, response, next){
	var id = request.params.id;
    
    var query = model.find({
        "_id": new ObjectId(id)
    }).limit(1);
    
    query.exec(function(error, post){
        if(error)
			return next(error);
		
		try{
			return response.send(post);	
		}
		catch(e){
			response.send('error: ' + e);
		}
    });	
}

exports.save = function(request, response, next){
	
		/*var counter = 2;
		model.create({
			title: 'blog ' + counter,
			body: 'body',
			active: true,
			comments: [
				{
					name: 'gary',
					body: "comment " + counter + "1"					
				},
				{
					name: 'gary',
					body: "comment " + counter + "2"					
				}
			]
		}, function(err, doc){
			if(err)
				return next(err);
				
			response.send('saved');
		});*/
	
    response.send({response: request.body.title});
}