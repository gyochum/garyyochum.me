import {Inject} from 'angular2/angular2';
import {Http, Response, Headers} from 'angular2/http';
import {BlogPost} from '../../models/blogpost';
import {Comment} from '../../models/comment';
import {BaseService} from './baseService';
import {Storage} from '../../utilities/storage';

export class BlogPostService extends BaseService{
    
	constructor(@Inject(Http) public http:Http){		        
        super();
	}
	
	getActivePosts(){
        var token = Storage.get<string>("token");
                
        if(token)
            this.headers.append("Authorization", 'Bearer ' + token.replace(/['"]+/g, ''));
        
		return this.http.get(this.baseApiUrl + '/blogs', { headers: this.headers })
			.map(r => {
				return (<Response>r).json();
			})
			.map((posts: Array<any>) => {
				let result: Array<BlogPost> = [];
				if(posts){
					posts.forEach((post) => {
						var blogPost = new BlogPost();
						
                        blogPost.id = post._id;
                        blogPost.url = post.url;
						blogPost.title = post.title;
						blogPost.body = post.body;
						blogPost.isActive = post.active;
						blogPost.createdDate = new Date(post.created);
						blogPost.tags = post.tags;
                        blogPost.comments = this.mapComments(post.comments);
						
						result.push(blogPost);
					})
				}
				return result;
			});					
	}
    
    getBlogPost(id: string){
        return this.http.get(this.baseApiUrl + '/blogs/' + id)
                .map(r => {
                    return (<Response>r).json();
                })
                .map((posts: Array<any>) => {                    
                   let result: BlogPost = new BlogPost();
                   
                   if(posts && posts.length > 0){
                       var post = posts[0];
                       
                       result.id = post._id;
                       result.url = post.url;
                       result.title = post.title;
                       result.preview = post.preview;
						result.body = post.body;
						result.isActive = post.active == undefined? false:post.active;
						result.createdDate = new Date(post.created);
						result.tags = post.tags;
                        result.comments = this.mapComments(post.comments);
                   }  
                   
                   return result;
                });
    }
    
    save(post: BlogPost){
        var token = Storage.get<string>("token");        
        
        if(token)
            this.headers.append("Authorization", 'Bearer ' + token);
        
        return this.http.post(this.baseApiUrl + '/blogs', JSON.stringify(post), { headers: this.headers })
                        .map((response: Response) => {
                            console.log('response: '  + response);
                            return response.text()
                        });
    }
    
    update(post: BlogPost){ 
        var token = Storage.get<string>("token");
                
        if(token)
            this.headers.append("Authorization", 'Bearer ' + token.replace(/['"]+/g, ''));
                                  
        return this.http.put(this.baseApiUrl + '/blogs/' + post.id, JSON.stringify(post), { headers: this.headers })
                        .map((response: Response) => response.json());
    }
    
    delete(id: string){
        var token = Storage.get<string>("token");
                
        if(token)
            this.headers.append("Authorization", 'Bearer ' + token);
        
        return this.http.delete(this.baseApiUrl + '/blogs/' + id, { headers: this.headers})
                .map((response: Response) => {return response.json();})
                .map((response: any) => {
                   let result: BlogPost = new BlogPost();
                   
                   if (response){
                       var post = response.value;
                       
                       result.id = post._id;
                       result.url = post.url;
                       result.title = post.title;
                       result.preview = post.preview;
					   result.body = post.body;
					   result.isActive = post.active == undefined? false:post.active;
					   result.createdDate = new Date(post.created);
					   result.tags = post.tags;
                       result.comments = this.mapComments(post.comments);
                   }
                   
                   return result; 
                });                        
    }
    
    saveComment(comment: Comment){
        return this.http.post(this.baseApiUrl + '/comments', JSON.stringify(comment), { headers: this.headers })
                        .map(r => {
                            return (<Response>r).json();
                        })
                        .map((comments: Array<any>) => {
                            let results: Array<Comment> = new Array<Comment>();
                            
                            if(comments && comments.length > 0){
                                //var post = posts[0];
                                
                                if(comments && comments.length > 0){
                                    results = this.mapComments(comments);
                                }
                            }    
                            
                            return results;
                        });
                        
    }
    
    getAvatar(email: String){
        return this.http.get('https://api.github.com/search/users?type=Users&q=' + email + '+in%3Aemail')
            .map((r: Response) => { return r.json(); })
            .map((results: any) => {
               let result: String= '';
               let item: any = null;
               
               if(results && results.total_count == 1){
                   item = results.items[0];
                   
                   if(item){
                       result = item.avatar_url;
                   }
               }
               
               return result; 
            });
    }
    
    private mapComments(comments: Array<any>): Array<Comment> {
        var results: Array<Comment> = new Array<Comment>();
        
        if (comments){
            comments.forEach(c => {
                var comment = new Comment();
                
                comment.id = c._id;
                comment.name = c.name;
                comment.body = c.body;
                comment.createdDate = new Date(c.created);
                
                results.push(comment);
            });
        }
        
        return results;
    }
	
}