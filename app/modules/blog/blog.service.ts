import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {BlogPost} from '../../models/blogpost';
import {Comment} from '../../models/comment';
import {BaseService} from '../shared/base.service';
import { ServiceResponse } from '../../models/serviceResponse';
import { POSTS } from '../../data/mock-blogposts';
import {CookieService} from 'angular2-cookie/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogPostService extends BaseService{
    
    private api:string = this.baseApiUrl + "/blogs";
    
	constructor(private http:Http, private cookieService: CookieService){		        
        super();
	}
	
    getPosts():Promise<ServiceResponse<Array<BlogPost>>>{
        var results:ServiceResponse<Array<BlogPost>> =  new ServiceResponse<Array<BlogPost>>();
        
       return this.http.get(this.api)
                        .toPromise()
                        .then((response: Response) => {
                           var posts = response.json(); 
                           
                           if(posts.success){
                               results.data = posts.data.map((post: any, index: number) => {
                                  return new BlogPost(post); 
                               });
                               
                               return results;
                           }
                        });      
    }
    
	getActivePosts(){
        var token = "TODO: get token";
                
        if(token)
            this.headers.append("Authorization", 'Bearer ' + token.replace(/['"]+/g, ''));
        
        
        
		return this.http.get(this.baseApiUrl + '/blogs', { headers: this.headers })
            .toPromise()
            .then(response => {
                
            });
            
			/*.map(r => {
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
			});	*/				
	}
    
    getBlogPost(id: string){
        
    }
    
    save(post: BlogPost): Promise<ServiceResponse<BlogPost>>{
       var token:string = this.cookieService.get("token");        
        
        if(token)
            this.headers.append("Authorization", 'Bearer ' + token);
        
        return this.http.post(this.baseApiUrl + '/blogs', JSON.stringify(post), { headers: this.headers })
                        .toPromise()
                        .then((response: Response) => {
                            var result = response.json();
                            
                            return new ServiceResponse<BlogPost>(result.success, result.message, result.data);
                        });
    }
    
    update(post: BlogPost){ 
        
    }
    
    delete(id: string){
                           
    }
    
    saveComment(comment: Comment){
       
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