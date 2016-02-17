import {Inject} from 'angular2/angular2';
import {Http, Response, Headers} from 'angular2/http';
import {BaseService} from './baseService';

export class OAuthService extends BaseService{
    public headers:Headers;
    
	constructor(@Inject(Http) public http:Http){		        
        super();
        
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
	}
    
    authorize(){
        
    }
}