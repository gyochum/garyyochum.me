import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Provider} from '../models/provider';
import { AuthService } from '../services/authService';

@Component({
    selector: 'autho',
    templateUrl: './app/views/auth/authorize.html',
    inputs: ['github'],
    providers: [Provider, AuthService]
})

export class AuthorizeComponent{
    
    public github:Provider;
    
    constructor(public service:AuthService){
        this.github = new Provider();
        
        service.getOAuthSettings()
            .subscribe((data:Provider) => {
               this.github = data; 
            });
        
    }
    
}