import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { BlogPost } from '../models/blogpost';
import { BlogPostService } from '../services/blog.service';

@Component({
    selector: 'app',
    templateUrl: './app/views/blog/index.html',
    providers: [BlogPost, BlogPostService],
    directives: [NgFor, NgIf, RouterLink]    
})

export class BlogsComponent implements OnInit { 
    
    private route: ActivatedRoute;
    
    ngOnInit() : any{
        //this.route.
    }
    
   
    /*constructor(data: RouteParams, svc: BlogPostService){
        var token = data.get('token');
        
        if(token)
            Storage.set('token', token);
        
        this.isLoggedIn = Storage.get<string>('token') !== null;         
        this.service = svc;
                
        this.service.getActivePosts()
            .subscribe(response => {
                this.posts = response;                
            });
    }
    
    
    delete(id: string){
        this.service.delete(id).subscribe((response: BlogPost) => {
            var index = this.posts.map((p: BlogPost) => {
              return p.id;  
            }).indexOf(response.id);
            
            if(index > -1){
                this.posts.splice(index, 1);
                //toastr.success('post deleted successfully.');
            }
        })
    }
    */
    
}