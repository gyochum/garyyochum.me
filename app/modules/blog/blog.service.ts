import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {BlogPost} from '../../models/blogpost';
import {Comment} from '../../models/comment';
import {BaseService} from '../shared/base.service';
import { ServiceResponse } from '../../models/serviceResponse';
import { POSTS } from '../../data/mock-blogposts';
import {CookieService} from 'angular2-cookie/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogPostService extends BaseService{
    
    private api:string = this.baseApiUrl + "/blogs";
    
	constructor(private http:Http, private cookieService: CookieService){		        
        super();
	}
	
    getPosts():Promise<ServiceResponse<Array<BlogPost>>>{
        var results:ServiceResponse<Array<BlogPost>> =  new ServiceResponse<Array<BlogPost>>();
        
       return this.http.get(this.api)
                        .toPromise()
                        .then((response: Response) => {
                           let posts = response.json(); 
                           
                           if(posts.success){
                               results.data = posts.data.map((post: any, index: number) => {
                                  return new BlogPost(post); 
                               });
                               
                               return results;
                           }
                        });      
    }
    
    getBlogPost(url: string):Promise<ServiceResponse<BlogPost>>{               
        return this.http.get(this.api + '/' + url)
                .toPromise()
                .then((response: Response) => {
                    let json = response.json();
                    let result = new ServiceResponse<BlogPost>();
                    
                    if(json.success){
                       let post = new BlogPost(json.data);
                       result.data = post; 
                    }
                    else{
                        result.success = json.success;
                        result.message = json.message;
                    }
                    
                    return result;
                });       
    }
    
    save(post: BlogPost): Promise<ServiceResponse<BlogPost>>{
       var token:string = this.cookieService.get("token");        
        
        if(token)
            this.headers.append("Authorization", 'Bearer ' + token);
        
        return this.http.post(this.baseApiUrl + '/blogs', JSON.stringify(post), { headers: this.headers })
                        .toPromise()
                        .then((response: Response) => {
                            var result = response.json();
                            
                            return new ServiceResponse<BlogPost>(result.success, result.message, result.data);
                        });
    }
    
    update(post: BlogPost){ 
        
    }
    
    delete(id: string){
                           
    }
    
    saveComment(comment: Comment):Promise<ServiceResponse<Array<Comment>>>{
       return this.http.post(this.baseApiUrl + '/comment', JSON.stringify(comment))
                .toPromise()
                .then((response:Response) => {
                    let results: ServiceResponse<Array<Comment>>;
                    let comments:any = response.json();
                    
                    if(comments.success && comments.data){
                        results = new ServiceResponse<Array<Comment>>(true, '', new Array<Comment>());
                        comments.data.forEach((comment:any) =>{
                           results.data.push(new Comment(comment)); 
                        });
                    }
                    else{
                        results = new ServiceResponse<Array<Comment>>(false, 'unable to save comment', null);
                    }
                    
                    return results;
                });
    }
    
}