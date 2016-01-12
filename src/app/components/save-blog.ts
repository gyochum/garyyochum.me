import { Component, FormBuilder, Validators, FORM_DIRECTIVES } from 'angular2/angular2';
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
    }
    
    save(){
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
    
    blogForm:any;
    service: BlogPostService;
}