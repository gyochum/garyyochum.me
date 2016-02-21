import {Component} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {UserProfile} from '../models/profile';

@Component({
    selector: 'autho',
    templateUrl: './app/views/auth/authorize.html',
    providers: [UserProfile]
})

export class AuthorizeComponent{
    
}