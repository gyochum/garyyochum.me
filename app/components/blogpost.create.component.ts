import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../models/blogpost';
import { BlogPostService } from '../services/blog.service';
import { ServiceResponse } from '../models/serviceResponse';

@Component({
    selector: "post-create",
    templateUrl: "./app/views/blog/save.html"
})

export class BlogCreateComponent implements OnInit{

    model: BlogPost;

    constructor(private service:BlogPostService){}

    ngOnInit(){
        if(!this.model) this.model = new BlogPost();
    }

    save(){

    }

}