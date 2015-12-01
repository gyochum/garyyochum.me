import {Inject} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {BlogPost} from '../../models/blogpost';

export class BlogPostService{
	
	constructor(@Inject(Http) http:Http){
		
	}
	
	getActivePosts(){
		var results:Array<number> = [3, 4, 5, 2, 10];
		
		return results;
	}
	
	
	
}