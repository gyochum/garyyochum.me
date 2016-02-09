import { Component, FormBuilder, Validators, FORM_DIRECTIVES, AbstractControl, ControlGroup } from 'angular2/angular2';
import { BlogPostService } from '../services/concrete/blogService';
import { BlogPost } from '../models/blogPost';

@Component({
    selector: 'save-blog',
    templateUrl: './app/views/bighitter/blog/save.html',
    providers: [BlogPost, BlogPostService],
    directives: [ FORM_DIRECTIVES ]
})

export class SaveBlogPostComponent{        
    constructor(fb: FormBuilder, svc: BlogPostService){
        this.service =  svc;
        this.blogForm = fb.group({
            title: ["", Validators.required],
            url: ["", Validators.required],
            preview: ["", Validators.required],
            body: ["", Validators.required],
            isActive: [false]
        });
        this.title = this.blogForm.controls["title"];        
        this.url = this.blogForm.controls["url"];
        this.preview = this.blogForm.controls["preview"];
        this.body = this.blogForm.controls["body"];
    }
    
    save(){
        if(this.blogForm.valid){
          var post = new BlogPost();
            post.isActive = this.blogForm.value.isActive;
            post.title = this.blogForm.value.title;
            post.url = this.blogForm.value.url;
            post.preview = this.blogForm.value.preview;
            post.body = this.blogForm.value.body;
            
            this.service.save(post)
                .subscribe(response => {
                    console.log(response);
                });                  
        }
        
    }
    
    blogForm:ControlGroup;
    title: AbstractControl;
    url: AbstractControl;
    preview: AbstractControl;
    body: AbstractControl;
    service: BlogPostService;
}