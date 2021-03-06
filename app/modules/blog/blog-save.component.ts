import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../../models/blogpost';
import { BlogPostService } from './blog.service';
import { ServiceResponse } from '../../models/serviceResponse';
import {ActivatedRoute, Params} from '@angular/router';
import {Validator} from '@angular/forms';

declare var toastr: any;

@Component({
    selector: "post-create",
    templateUrl: "./dist/js/modules/blog/blog-save.component.html"
})

export class BlogSaveComponent implements OnInit{

    model: BlogPost;
    
    constructor(private route:ActivatedRoute, private service:BlogPostService){
        this.model = new BlogPost(null);
    }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
			let url  = params['url'];
			
            if(url){
                this.service.getBlogPost(url).then((response: ServiceResponse<BlogPost>) => {
                    if(response.success){                        
                        this.model = response.data;
                    }
                });
            }			
		});      
    }

    save(){
        var result:Promise<ServiceResponse<BlogPost>>;
        
        if(this.model.id){
            result = this.service.update(this.model);    
        }
        else{
            result = this.service.save(this.model);
        }
        
        result.then((response: ServiceResponse<BlogPost>) => {
            if(response.success){
                toastr.success('blog post ' + response.data.title + ' saved.');
            }
            else{
                toastr.error(response.message, 'save error');
            }
        });
    }

}