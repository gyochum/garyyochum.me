import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../models/blogpost';
import { BlogPostService } from '../services/blog.service';
import { ServiceResponse } from '../models/serviceResponse';

@Component({
    selector: 'app',
    templateUrl: './app/views/blog/index.html'    
})

export class BlogsComponent implements OnInit { 
    
    public posts: Array<BlogPost>;
    public isLoggedIn:boolean = false;
    
    constructor(private service:BlogPostService){}
    
    ngOnInit() : any{
        var response:ServiceResponse<BlogPost[]> = this.service.getPosts();
        
        if(response.success){
            this.posts = response.data;
        }
    }
   
}