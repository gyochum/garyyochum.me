import { Component, View, NgFor, NgIf } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import {BlogPost} from '../models/blogpost';
import {BlogPostService} from '../services/concrete/blogservice';
import {Storage} from '../utilities/storage';

@Component({
    selector: 'blogs',
    templateUrl: './app/views/blog/index.html',
    providers: [BlogPost, BlogPostService],
    directives: [NgFor, NgIf, RouterLink]    
})

export class BlogPostComponent { 
    constructor(data: RouteParams, svc: BlogPostService){
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
                toastr.success('post deleted successfully.');
            }
        })
    }
    
    public posts:Array<BlogPost>;
    public isLoggedIn: boolean = false;
    private service:BlogPostService;    
}