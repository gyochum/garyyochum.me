var model = require('../models/blog');
var Comment = require('../models/comment');
var ObjectId = require('mongoose').Types.ObjectId;

exports.all = function(request, response, next){
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

exports.detail = function(request, response, next){
	var id = request.params.id;
    
    var query = model.find({
        "url": id
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
	var post = request.body;
    
    model.create({
        active: post.isEnabled,
        title: post.title,
        url: post.url,
        preview: post.preview,
        body: post.body			
    }, function(err, doc){
        if(err)
            return next(err);
            
        response.send('saved');
    });	
}

exports.update = function(request, response, next){
 //todo: add code here   
}

exports.delete = function(request, response, next){
 //todo: add code here   
}

exports.addComment = function(request, response, next){
    var comment = request.body;
        
    if(comment){
        var url = comment.blogUrl;
        var newComment = new Comment();

        newComment.set({
            name: comment.name,
            email: comment.email,
            body: comment.body,
            created: Date.now()
        });
        
        model.findOneAndUpdate({
            url: url
        }, {
            $push: {
                comments: newComment
            }            
        },
        {
            safe: true,
            upsert: true
        }, function(error, post){
            if (error)
                console.log(error);
                
            response.send(post);
        })
    }    
}