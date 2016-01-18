import { Component, View, NgIf, FormBuilder, Validators, FORM_DIRECTIVES } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import {BlogPost} from '../models/blogpost';
import {Comment} from '../models/comment';
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
        
        this.service = service;        
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
        if(this.commentForm.valid){
            var comment = new Comment();
            comment.name = this.commentForm.value.name; 
            comment.email = this.commentForm.value.email;
            comment.body = this.commentForm.value.body;
            
        }
        
        //this.service.saveComment
    }
    
    public service: BlogPostService;
    public post: BlogPost;
    public commentForm: any;
    
}