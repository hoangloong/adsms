import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { routes } from './app.routes';

import { IconDefinition } from '@ant-design/icons-angular';
import {
  SettingOutline,
  MailOutline,
  AppstoreOutline,
  ArrowLeftOutline,
  UserOutline,
  TeamOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  SettingOutline,
  MailOutline,
  AppstoreOutline,
  ArrowLeftOutline,
  UserOutline,
  TeamOutline,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(NzIconModule.forRoot([...icons])),
  ],
};
