import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
	selector: 'login',
	template: '<div class="login">' +  
		'<div (click)="login(\'google\')" class="fa fa-google-plus"></div>' + 
		'<div (click)="login(\'github\')" class="fa fa-github"></div>' + 
		'</div>'
})

export class AuthLoginComponent implements OnInit{
	
	isLoggedIn:boolean;
	
	constructor(private service:AuthService){
		this.isLoggedIn = true;
	}
	
	ngOnInit(){
		this.isLoggedIn = this.service.isLoggedIn();
	}
	
	login(provider:string){
		this.service.login(provider);
	}
	
}