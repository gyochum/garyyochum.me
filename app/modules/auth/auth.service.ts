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
    private _test:Subject<Boolean>= new Subject<Boolean>();
    
    constructor(private http:Http){
        super();
    }
    
    login(provider:string):void{
        this.http.get(this.baseApiUrl + '/api/login/' + provider).map((response:Response) => {
            response.json();
        })
        .subscribe(
            response => console.log(response),
            error => console.log(error)
        );
    }
    
    isLoggedin():boolean{
        return this.isAuthenticated;
    }        
    
}