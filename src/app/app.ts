import {bootstrap, Component, NgFor } from 'angular2/angular2';
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
        this.numbers = service.getActivePosts();
    }
    
    public title = "hey there";
    public numbers:Array<number>;    
}

bootstrap(AppComponent, [HTTP_PROVIDERS, BlogPostService]);