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
        service.getActivePosts()
            .subscribe(response => this.numbers = response);
    }
    
    public title = "hey there";
    public numbers:Array<string>;    
}

bootstrap(AppComponent, [HTTP_PROVIDERS, BlogPostService]);