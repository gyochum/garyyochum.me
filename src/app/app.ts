///<reference path="../../node_modules/angular2/angular2.d.ts" />
import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App - YESSSSSS!!</h1>'
})


class AppComponent { 
    public title = 'My New App';
    public name = 'gary';
}

bootstrap(AppComponent);