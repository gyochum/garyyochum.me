import { Component, View } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import {BlogPost} from '../models/blogpost';
import {BlogPostService} from '../services/concrete/blogservice';

@Component({
    selector: 'blog-detail',
    templateUrl: './app/views/blog/detail.html',
    providers: [BlogPost, BlogPostService],
    directives: [RouterLink]
})

export class BlogPostDetailComponent{
    constructor(params: RouteParams, service: BlogPostService){
        var id: number = parseInt(params.get('id'));
        
        service.getBlogPost(id)
            .subscribe(response => {
                this.post = response;                
            });
    }
    
    public post: BlogPost;
}