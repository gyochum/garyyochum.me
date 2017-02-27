import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BaseService } from '../shared/base.service';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import * as Rx from "rxjs/Rx";

@Injectable()
export class AuthService extends BaseService{
    
    private isAuthenticated:boolean;
    
    constructor(private http:Http){
        super();
    }
    
    login(provider:string):Promise<string>{
        return this.http.get(this.baseApiUrl + '/login/' + provider)
            .toPromise()
            .then((response) => {
                console.log(response);
              return 'finsihed';  
            });
    }
    
    isLoggedin():boolean{
        return this.isAuthenticated;
    }        
    
}