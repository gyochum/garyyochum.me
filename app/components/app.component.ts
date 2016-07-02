import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, NgIf],
  templateUrl: './app/views/home/index.html'
})

export class AppComponent{
  
  //properties
  public isLoggedIn: Boolean;
  
  logout(){
    console.log('loggin out');
  }
  
}