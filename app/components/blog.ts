import { Component, View, NgIf, NgFor, FormBuilder, Validators, FORM_DIRECTIVES } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import {BlogPost} from '../models/blogpost';
import {Comment} from '../models/comment';
import {BlogPostService} from '../services/concrete/blogservice';
import {OrderByPipe} from '../pipes/orderby';

@Component({
    selector: 'blog-detail',
    templateUrl: './app/views/blog/detail.html',
    providers: [BlogPost, BlogPostService],
    directives: [RouterLink, NgIf, NgFor, FORM_DIRECTIVES],
    inputs: ['post', 'commentForm'],
    pipes: [OrderByPipe]
})


export class BlogPostDetailComponent{
    constructor(params: RouteParams, fb: FormBuilder, service: BlogPostService){
        var id: string = params.get('id');
        
        this.service = service;        
        this.post = new BlogPost();
        this.commentForm = fb.group({
            blogPostId: [id],
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
            
            comment.blogPostId = this.commentForm.value.blogPostId;
            comment.name = this.commentForm.value.name; 
            comment.email = this.commentForm.value.email;
            comment.body = this.commentForm.value.body;
            
            this.service.saveComment(comment)
                .subscribe(response => {
                   this.post.comments = <Comment[]>response; 
                   toastr.success('comment added successfully.');
                });
        }
        
        //this.service.saveComment
    }
    
    deleteComment(commentId: string){
        console.log(commentId);
    }
    
    getAvatar(){
        this.service.getAvatar(this.commentForm.value.email)
            .subscribe((response: String) => {
               this.avatar = response;
            });
    }
    
    public service: BlogPostService;
    public post: BlogPost;
    public commentForm: any;
    public avatar: String;
    
}