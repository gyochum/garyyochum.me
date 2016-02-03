import { Component, View } from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { BlogPostComponent } from '../components/blogs'; 
import { BlogPostDetailComponent } from '../components/blog'; 
import { SaveBlogPostComponent } from '../components/save-blog';
import {EditBlogPostComponent} from '../components/edit-blog';

@Component({
	selector: 'app',
	templateUrl: './app/views/home/index.html',
    directives: [RouterLink, RouterOutlet]
})

@RouteConfig([
    { path: '/', redirectTo: '/blogs' },
    { path: '/blogs', as: 'Blogs', component: BlogPostComponent },
    { path: '/blog/:id', as: 'BlogDetail', component: BlogPostDetailComponent },
    { path: '/blog/save', as: 'SaveBlogs', component: SaveBlogPostComponent },
    { path: '/blog/edit/:id', as: 'EditBlog', component: EditBlogPostComponent }
])

export class App{
    title: string;
    constructor(){
        this.title = "Gary's Super Fun Blog";
    }
}