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
        active: post.isActive,
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
 var result = {};
 var id = request.params.id;
 var post = request.body;
 
 if(post){
     model.findOneAndUpdate({
            _id: id
        }, {
            active: post.isActive,
            title: post.title,
            url: post.url,
            preview: post.preview,
            body: post.body            
        },
        {            
            new: true
        }, function(error, post){
            result["error"] = error;
            result["post"] = post;
                
            response.send(result);
        })
 }
 
 return result;
}

exports.delete = function(request, response, next){
 var id = request.params.id;
 
 model.findOneAndRemove({
     _id: id
 }, {
     passRawResult: true
 }, function(error, post, raw){
     if(error)
        return next(error);
        
    return response.send(raw);
 })
}

exports.addComment = function(request, response, next){
    var comment = request.body;
        
    if(comment){
        var url = comment.blogPostId;
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
            upsert: false,
            new: true
        }, function(error, post){
            if (error)
                console.log(error);
                
            response.send(post.comments);
        })
    }    
        
}

exports.updateComment = function(request, response, next){
        
}