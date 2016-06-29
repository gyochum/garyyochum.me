import { Component, View, NgIf } from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet, Router } from 'angular2/router';
import { BlogPostComponent } from '../components/blogs'; 
import { BlogPostDetailComponent } from '../components/blog'; 
import { SaveBlogPostComponent } from '../components/save-blog';
import {EditBlogPostComponent} from '../components/edit-blog';
import {AuthorizeComponent} from '../components/authorize';
import {BaseService} from '../services/concrete/baseservice';

@Component({
	selector: 'app',
	templateUrl: './app/views/home/index.html',
    directives: [RouterLink, RouterOutlet, NgIf]
})

@RouteConfig([
    { path: '/', redirectTo: '/blogs' },
    { path: '/blogs', as: 'Blogs', component: BlogPostComponent },
    { path: '/blog/:id', as: 'BlogDetail', component: BlogPostDetailComponent },
    { path: '/blog/save', as: 'SaveBlogs', component: SaveBlogPostComponent },
    { path: '/blog/edit/:id', as: 'EditBlog', component: EditBlogPostComponent },
    { path: '/authorize', as: 'Authorize', component: AuthorizeComponent }    
])

export class App{
    title: string;
    isLoggedIn:boolean;
    service:BaseService;
    router:Router;
    
    constructor(service:BaseService, router: Router){
        this.title = "Gary's Super Fun Blog";
        this.service = service;
        this.router = router; 
        this.isLoggedIn = service.isLoggedIn();
    }
    
    logout(){
        this.service.logout();
        this.isLoggedIn = false;
        this.router.navigate(['Blogs']);
    }
}