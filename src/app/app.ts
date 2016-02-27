import {bootstrap, bind, provide } from 'angular2/angular2';
import {ROUTER_PROVIDERS, ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {BlogPostService} from './services/concrete/blogservice';
import {BaseService} from './services/concrete/baseservice';
import { App } from './components/base'; 

var injectables = [
  ROUTER_PROVIDERS,
  ROUTER_BINDINGS,
  HTTP_PROVIDERS,
  BaseService,
  BlogPostService
];

bootstrap(App, [injectables, provide(LocationStrategy, {useClass: HashLocationStrategy})]);