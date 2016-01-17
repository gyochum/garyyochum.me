import { Component, View, NgIf, FormBuilder, Validators, FORM_DIRECTIVES } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import {BlogPost} from '../models/blogpost';
import {BlogPostService} from '../services/concrete/blogservice';

@Component({
    selector: 'blog-detail',
    templateUrl: './app/views/blog/detail.html',
    providers: [BlogPost, BlogPostService],
    directives: [RouterLink, NgIf, FORM_DIRECTIVES],
    inputs: ['post', 'commentForm']
})


export class BlogPostDetailComponent{
    constructor(params: RouteParams, fb: FormBuilder, service: BlogPostService){
        var id: string = params.get('id');
        
        this.post = new BlogPost();
        this.commentForm = fb.group({
            name: ["", Validators.required],
            email: ["", Validators.required],
            body: [""]
        });
        
        service.getBlogPost(id)
            .subscribe(response => {                
                this.post = response;
            });
           
    }
    
    saveComment(){
        
    }
    
    public post: BlogPost;
    public commentForm: any;
    
}