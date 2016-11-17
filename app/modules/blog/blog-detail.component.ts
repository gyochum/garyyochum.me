import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {BlogPost} from '../../models/blogpost';
import {Comment} from '../../models/comment';
import {BlogPostService} from './blog.service';
import {ServiceResponse} from '../../models/serviceResponse';
import 'rxjs/add/operator/map';

declare var toastr: any;

@Component({
	selector: 'blog-detail',
	templateUrl: './dist/js/modules/blog/blog-detail.component.html'
})

export class BlogDetailComponent implements OnInit{
	
	post: BlogPost;
	comment: Comment;
	
	constructor(private route:ActivatedRoute, private service:BlogPostService){
		this.post = new BlogPost(null);
		this.comment = new Comment(null);
	}
	
	ngOnInit(){
		this.route.params.forEach((params: Params) => {
			let url  = params['url'];
			
			this.service.getBlogPost(url).then((response: ServiceResponse<BlogPost>) => {
				if(response.success){
					this.post = response.data;
					this.comment.blogPostId = this.post.id;
				}
			});
		});
	}
	
	saveComment(){		
		this.service.saveComment(this.comment).then((comments:ServiceResponse<Array<Comment>>) => {
			if(comments.success){
				this.post.comments = comments.data;
				this.comment = new Comment(null);
				toastr.success('comment saved sucessfully');	
			}
			else{
				toastr.error('error occurred while saving the comment');
			}
		})
	}
	
	deleteComment(id:string){
		
	}
	
}