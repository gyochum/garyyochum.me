import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AuthService} from './auth.service';
//import {} from './auth-status.component';

@NgModule({
	imports: [HttpModule],
	providers: [AuthService]
})

export class AuthModule{}