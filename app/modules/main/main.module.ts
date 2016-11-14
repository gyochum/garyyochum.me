import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { routing, routeProviders } from './app.routes';
import { AppComponent } from './app.component';
import { BlogModule } from '../blog/blog.module';

@NgModule({
    imports: [BrowserModule, HttpModule, routing, BlogModule],
    declarations: [AppComponent],
    providers: [routeProviders, CookieService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})

export class AppModule{}