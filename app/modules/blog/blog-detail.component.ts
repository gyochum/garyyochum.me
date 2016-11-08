import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../../models/blogpost';
import {BlogPostService} from './blog.service';

@Component({
	selector: 'app',
	templateUrl: './blog-detail.component.html'
})

export class BlogDetailComponent implements OnInit{
	
	post: BlogPost;
	
	constructor(private service:BlogPostService){
		
	}
	
	ngOnInit(){
		console.log('loaded the detail component - yessss');
	}
	
}