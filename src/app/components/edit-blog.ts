import { Component, FormBuilder, Validators, FORM_DIRECTIVES, AbstractControl, ControlGroup } from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import { BlogPostService } from '../services/concrete/blogService';
import { BlogPost } from '../models/blogPost';

@Component({
    selector: 'edit-blog',
    templateUrl: './app/views/bighitter/blog/edit.html',
    providers: [BlogPost, BlogPostService],
    directives: [ FORM_DIRECTIVES ]
})

export class EditBlogPostComponent{
    constructor(params: RouteParams, fb: FormBuilder, svc: BlogPostService){
        var id: string = params.get('id');
        this.service =  svc;
        
        this.service.getBlogPost(id).subscribe((response: BlogPost) => {
            console.log(response);
            this.blogForm = fb.group({
                title: [response.title, Validators.required],
                url: [response.url, Validators.required],
                preview: [response.preview, Validators.required],
                body: [response.body, Validators.required],
                isActive: [response.isActive]
            });
        });
        
        
        this.title = this.blogForm.controls["title"];        
        this.url = this.blogForm.controls["url"];
        this.preview = this.blogForm.controls["preview"];
        this.body = this.blogForm.controls["body"];
    }
    
    update(){
        
    }
    
    blogForm:ControlGroup;
    title: AbstractControl;
    url: AbstractControl;
    preview: AbstractControl;
    body: AbstractControl;
    service: BlogPostService;
}