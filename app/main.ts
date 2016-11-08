import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/main/main.module';

//compiles & bootstraps the main module
platformBrowserDynamic().bootstrapModule(AppModule);