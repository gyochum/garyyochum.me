import {Inject} from 'angular2/angular2';
import {Http, Response, Headers} from 'angular2/http';
import {BlogPost} from '../../models/blogpost';
import {BaseService} from './baseService';

export class BlogPostService extends BaseService{
	public headers:Headers;
    
	constructor(@Inject(Http) public http:Http){		        
        super();
        
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
	}
	
	getActivePosts(){
		return this.http.get('http://localhost:3000/api/blogs')
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
						
						result.push(blogPost);
					})
				}
				return result;
			});					
	}
    
    getBlogPost(id: string){
        return this.http.get('http://localhost:3000/api/blogs/' + id)
                .map(r => {
                    return (<Response>r).json();
                })
                .map((post: any) => {
                   let result: any = new BlogPost();
                   if(post){
                       result.id = post._id;
                       result.url = post.url;
                       result.title = post.title;
						result.body = post.body;
						result.isActive = post.active;
						result.createdDate = post.created;
						result.tags = post.tags;
                   }  
                   
                   return result;
                });
    }
    
    save(post: BlogPost){                       
        return this.http.post('http://localhost:3000/api/blogs', JSON.stringify(post), { headers: this.headers })
                        .map((response: Response) => response.json());
    }
	
}