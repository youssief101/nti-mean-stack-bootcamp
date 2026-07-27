// @yusuf: bootstrap means start the application doesn't have anything to do witht the css framework
import { bootstrapApplication } from '@angular/platform-browser'; 
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
