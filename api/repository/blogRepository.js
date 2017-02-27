var jwt = require('jsonwebtoken');
var settings = require('../config/settings');
var model = require('../models/blog');
var Comment = require('../models/comment');
var ObjectId = require('mongoose').Types.ObjectId;

exports.all = function(request, response, next){  
    var result = {
        success: true,
        message: '',
        data: null   
    };
    var header = request.get('Authorization');
    var query = model.find({
                    "active": "true"
                })
                .select('url title preview created active');
    
    if(header){
        console.log('header sent');
        var token = header.split(' ')[1];
        var secret = settings.oauth.secret;
        var verified = null;
        
        try{
            verified = jwt.verify(token, secret);
            
            if(verified){
               query = null; 
            }
        }
        catch(error){
            return next(error)
        }
    }
    
    if(!query){
        //verified as admin - get all blog posts
        model.find().select('url title preview created active').exec(function(error, posts){
            if(error){
                return next(error);
            }
            
            result.data = posts;
            
            return response.send(result);
        });
    }
    else{
        query.exec(function(error, posts){
            if(error){
                return next(error);
            }
            
            result.data = posts;
            
            return response.send(result);
        });
    }
		
}

exports.detail = function(request, response, next){
	var url = request.params.url;
    
    var query = model.findOne({
        "url": url
    });
    
    query.exec(function(error, post){
        if(error)
			return next(error);
		
		return response.send({
            success: true,
            message: '',
            data: post
        });	
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
    }, function(err, post){
        if(err)
            return next(err);
            
        return response.json({
           success: true,
           message: '',
           data: post 
        });
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
            if(error){
                return next(error);    
            }
            
            return response.json({
                success: true,
                message: '',
                data: post 
            });
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
        var id = comment.blogPostId;
        var newComment = new Comment();
        newComment.set('name', comment.name);
        newComment.set('email', comment.email);
        newComment.set('body', comment.body);
        newComment.set('created', comment.created);
        
        model.findOneAndUpdate({
            _id: id
        }, 
        {
            $push: {
                comments: newComment
            }
        }, {
            upsert: true,
            new: true
        }, function(error, post){
           if(error){
               next(error);
           } 
           
           response.send({
               success: true,
               message: '',
               data: post.comments
           })
        });
    }    
        
}

exports.updateComment = function(request, response, next){
        
}