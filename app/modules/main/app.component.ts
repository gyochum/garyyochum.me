import { Component } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'app',
    templateUrl: './dist/js/modules/main/app.component.html'
})

export class AppComponent{
    test:boolean = false;
    
    constructor(private service:AuthService){
        this.test = this.service.isLoggedIn();
    }
}