import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { routing, routeProviders } from './app.routes';
import { AppComponent } from './app.component';
import { BlogModule } from '../blog/blog.module';
import {AuthModule} from '../auth/auth.module';
import {AuthLoginComponent} from './auth-login.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [BrowserModule, HttpModule, routing, BlogModule, AuthModule, SharedModule],
    declarations: [AppComponent, AuthLoginComponent],
    providers: [routeProviders, CookieService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})

export class AppModule{}