import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../../models/blogpost';
import { BlogPostService } from './blog.service';
import { ServiceResponse } from '../../models/serviceResponse';

@Component({
    selector: 'app',
    templateUrl: './dist/js/modules/blog/blogs.component.html'
})

export class BlogsComponent implements OnInit { 
    
    public posts: Array<BlogPost>;
    public isLoggedIn:boolean = false;
    
    constructor(private service:BlogPostService){}
    
    ngOnInit() : any{
         this.service.getPosts().then((posts: ServiceResponse<Array<BlogPost>>) => {
             this.posts = posts.data;
         });
    }
    
    delete(post: BlogPost){
        console.log(post);
    }
   
}