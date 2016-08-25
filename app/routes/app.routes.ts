import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from '../components/app.component';
import { CreateBlogPostComponent } from '../components/create.blogpost.component';

export const routes: RouterConfig = [
    { path: 'blog', component: CreateBlogPostComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)  
];