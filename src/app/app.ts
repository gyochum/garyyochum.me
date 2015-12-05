import {bootstrap, Component, NgFor, CORE_DIRECTIVES } from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {BlogPost} from './models/blogpost';
import {BlogPostService} from './services/concrete/blogservice';

@Component({
    selector: 'my-app',
    templateUrl: './app/views/blog/index.html',
    providers: [BlogPost, BlogPostService],
    directives: [NgFor]
})
class AppComponent { 
    constructor(service: BlogPostService){
        console.log("hiiiiiiiiiiiiiiiiiiiii");
        service.getActivePosts()
            .subscribe(response => {
                this.posts = response;
                
            });
    }
    
    public posts:Array<BlogPost>;    
}

bootstrap(AppComponent, [HTTP_PROVIDERS, BlogPostService]);