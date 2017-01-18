import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
	selector: 'login',
	template: '<div class="login" *ngIf="!isLoggedIn">' + 
		'<div (click)="login(\'google\')" class="fa fa-google-plus"></div></div>' + 
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
		
	}
	
}