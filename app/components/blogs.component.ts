import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../models/blogpost';
//import { BlogPostService } from '../services/blog.service';

@Component({
    selector: 'app',
    templateUrl: './app/views/blog/index.html'    
})

export class BlogsComponent implements OnInit { 
    
    public posts: Array<BlogPost>;
    
    constructor(){}
    
    ngOnInit() : any{
        //this.route.
    }
    
    clicked(){
        console.log('link clicked');
    }
    
}