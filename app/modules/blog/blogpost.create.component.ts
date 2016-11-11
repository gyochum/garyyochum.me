import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../../models/blogpost';
import { BlogPostService } from './blog.service';
import { ServiceResponse } from '../../models/serviceResponse';
import {Validator} from '@angular/forms';

declare var toastr: any;

@Component({
    selector: "post-create",
    templateUrl: "./dist/js/modules/blog/blog-save.component.html"
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