import { Inject, Observable } from 'angular2/angular2';
import { Http, Response } from 'angular2/http';
import { BaseService } from './concrete/baseService';
import { Provider } from '../models/provider';

export class AuthService extends BaseService{
    
    constructor(@Inject(Http) public http:Http){
        super();
    }
    
    getOAuthSettings(): Observable<Provider>{
        return this.http.get(this.baseApiUrl + '/settings')
            .map((response: Response) => {
                return response.json();
            })
            .map((provider: any) => {
                let result: Provider = new Provider();
                
                result.authorizationUrl = provider.providers.github.authorizeUrl;
                result.clientId = provider.providers.github.clientId;
                result.redirectUrl = provider.providers.github.redirectUrl;
                result.scope = provider.providers.github.scope;
                
                return result;
            });
    }
    
}