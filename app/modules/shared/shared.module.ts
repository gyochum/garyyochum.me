import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './authService';
@NgModule({
	imports: [CommonModule],
	providers: [AuthService]
})

export class SharedModule{}