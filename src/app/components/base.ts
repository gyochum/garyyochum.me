import { Component, View } from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { BlogPostComponent } from '../components/blogs'; 

@Component({
	selector: 'app',
	templateUrl: './app/views/home/index.html',
    directives: [RouterLink, RouterOutlet]
})

@RouteConfig([
    { path: '/', redirectTo: '/blogs' },
    { path: '/blogs', as: 'Blogs', component: BlogPostComponent }
])

export class App{
    title: string;
    constructor(){
        this.title = "Gary's Super Fun Blog";
    }
}