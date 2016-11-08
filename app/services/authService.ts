import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BaseService } from '../modules/shared/base.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService extends BaseService{
    
    constructor(private http:Http){
        super();
    }
    
    getOAuthSettings(): any{
        return this.http.get(this.baseApiUrl + '/settings')
            .toPromise()
            .then((response: Response) => {
                return response.json();
            });            
    }
    
}