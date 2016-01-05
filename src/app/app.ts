import {bootstrap, bind, provide } from 'angular2/angular2';
import {ROUTER_PROVIDERS, ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
//import {BlogPost} from './models/blogpost';
import {BlogPostService} from './services/concrete/blogservice';
import { App } from './components/base'; 

var injectables = [
  ROUTER_PROVIDERS,
  ROUTER_BINDINGS,
  HTTP_PROVIDERS,
  BlogPostService  
];

bootstrap(App, [injectables, provide(LocationStrategy, {useClass: HashLocationStrategy})]);