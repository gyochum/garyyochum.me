import { Component, FormBuilder, Validators, FORM_DIRECTIVES, AbstractControl, ControlGroup, Input } from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import { BlogPostService } from '../services/concrete/blogService';
import { BlogPost } from '../models/blogPost';

@Component({
    selector: 'edit-blog',
    templateUrl: './app/views/bighitter/blog/edit.html',
    providers: [BlogPost, BlogPostService],
    inputs: ['post', 'blogFormControlGroup'],
    directives: [ FORM_DIRECTIVES ]
})

export class EditBlogPostComponent{
    constructor(params: RouteParams, fb: FormBuilder, svc: BlogPostService){
        this.service = svc;
        this.post = new BlogPost();
        this.blogFormControlGroup = fb.group({
           id: "",
           title: ["", Validators.required],
           url: ["", Validators.required],
           preview: ["", Validators.required],
           body: ["", Validators.required],
        });
        
        this.titleValidationControl = this.blogFormControlGroup.controls["title"];
        this.urlValidationControl = this.blogFormControlGroup.controls["url"];
        this.previewValidationControl = this.blogFormControlGroup.controls["preview"];
        this.bodyValidationControl = this.blogFormControlGroup.controls["body"];
        
        var id: string = params.get("id");
        this.service.getBlogPost(id).subscribe((response: BlogPost) => {
           this.post = response;
           console.log(this.post);
        });
    }
    
    update(){
        //console.log(this.blogFormControlGroup.value);
    }
    
    public post: BlogPost;
    public blogFormControlGroup: ControlGroup;
    public titleValidationControl: AbstractControl;
    public urlValidationControl: AbstractControl;
    public previewValidationControl: AbstractControl;
    public bodyValidationControl: AbstractControl;
    private service: BlogPostService;
}