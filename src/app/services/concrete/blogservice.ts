import {Inject} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import {BlogPost} from '../../models/blogpost';
import {BaseService} from './baseService';

export class BlogPostService extends BaseService{
	
	constructor(@Inject(Http) public http:Http){
		super();
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
						
						blogPost.title = post.title;
						blogPost.body = post.body;
						blogPost.isActive = post.active;
						blogPost.createdDate = post.created;
						blogPost.tags = post.tags;
						
						result.push(blogPost);
					})
				}
				return result;
			});			
		
	}
	
}