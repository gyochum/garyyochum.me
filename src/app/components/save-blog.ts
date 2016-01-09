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
            title: ["", Validators.required]
        });
    }
    
    save(){
        var post = new BlogPost();
        post.title = this.blogForm.value.title;
        
        this.service.save(post)
                    .subscribe(response => {
                        console.log(response);
                    });
    }
    
    blogForm:any;
    service: BlogPostService;
}