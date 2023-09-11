import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NhostClient } from '@nhost/nhost-js';

export const nhost = new NhostClient({
  subdomain: 'luycqhapxuynmnjsenei',
  region: 'ap-southeast-1',
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
