import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {BlogPost} from '../../models/blogpost';
import {BlogPostService} from './blog.service';
import {ServiceResponse} from '../../models/serviceResponse';
import 'rxjs/add/operator/map';

@Component({
	selector: 'blog-detail',
	templateUrl: './dist/js/modules/blog/blog-detail.component.html'
})

export class BlogDetailComponent implements OnInit{
	
	post: BlogPost = new BlogPost(null);
	
	constructor(private route:ActivatedRoute, private service:BlogPostService){
		
	}
	
	ngOnInit(){
		this.route.params.forEach((params: Params) => {
			let url  = params['url'];
			
			this.service.getBlogPost(url).then((response: ServiceResponse<BlogPost>) => {
				if(response.success){
					this.post = response.data;
				}
			});
		});
	}
	
}