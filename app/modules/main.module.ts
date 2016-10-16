import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { routing, routeProviders } from '../routes/app.routes';
import { AppComponent } from '../components/app.component';
import { BlogModule } from './blog.module';

@NgModule({
    imports: [BrowserModule, HttpModule, routing, BlogModule],
    declarations: [AppComponent],
    providers: [routeProviders, CookieService],
    bootstrap: [AppComponent]
})

export class AppModule{}