import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
//import {Router} from '@angular2/router';
//import { BlogPostService } from '../services/blog.service';
import { BlogPost } from '../models/blogpost';

@Component({
    selector: 'save-blog',
    templateUrl: './app/views/bighitter/blog/save.html',
    providers: [BlogPost]
})

export class CreateBlogPostComponent{  
    
    model: BlogPost;
          
    constructor(){
      
        //this.service =  svc;
        
    }
    
    create(){
       
    }
 
    private service: BlogPostService;
    
}