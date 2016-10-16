import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../models/blogpost';
import { BlogPostService } from '../services/blog.service';
import { ServiceResponse } from '../models/serviceResponse';
import {Validator} from '@angular/forms';

@Component({
    selector: "post-create",
    templateUrl: "./app/views/blog/save.html"
})

export class BlogCreateComponent implements OnInit{

    model: BlogPost;
    

    constructor(private service:BlogPostService){}

    ngOnInit(){
        if(!this.model) this.model = new BlogPost(null);       
        toastr.info('testing');
    }

    save(){
        this.service.save(this.model).then((response: ServiceResponse<BlogPost>) => {
            if(response.success){
                toastr.success('blog post ' + response.data.title + ' saved.');
            }
            else{
                toastr.success(response.message, 'save error');
            }
        });
    }

}