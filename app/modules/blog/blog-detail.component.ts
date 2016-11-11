import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {BlogPost} from '../../models/blogpost';
import {BlogPostService} from './blog.service';
import 'rxjs/add/operator/map';

@Component({
	selector: 'blog-detail',
	templateUrl: './dist/js/modules/blog/blog-detail.component.html'
})

export class BlogDetailComponent implements OnInit{
	
	post: BlogPost;
	
	constructor(private route:ActivatedRoute, private service:BlogPostService){
		
	}
	
	ngOnInit(){
		var url = this.route.queryParams.map(p => p['url']);
		console.log(url);
	}
	
}