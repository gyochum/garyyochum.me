import { Component, View, NgFor } from 'angular2/angular2';
import {BlogPost} from '../models/blogpost';
import {BlogPostService} from '../services/concrete/blogservice';

@Component({
    selector: 'blogs',
    templateUrl: './app/views/blog/index.html',
    providers: [BlogPost, BlogPostService],
    directives: [NgFor]    
})

export class BlogPostComponent { 
    constructor(service: BlogPostService){
        console.log("hiiiiiiiiiiiiiiiiiiiii");
        service.getActivePosts()
            .subscribe(response => {
                this.posts = response;
                
            });
    }
    
    public posts:Array<BlogPost>;    
}