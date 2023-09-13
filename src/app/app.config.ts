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
  ControlOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  CheckCircleOutline,
  InfoCircleOutline,
} from '@ant-design/icons-angular/icons';
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
// import { APOLLO_OPTIONS } from 'apollo-angular';
// import { InMemoryCache } from '@apollo/client/core';
// import { HttpLink } from 'apollo-angular/http';

const icons: IconDefinition[] = [
  SettingOutline,
  MailOutline,
  AppstoreOutline,
  ArrowLeftOutline,
  UserOutline,
  TeamOutline,
  ControlOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  CheckCircleOutline,
  InfoCircleOutline,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(NzIconModule.forRoot([...icons])),
    { provide: NZ_I18N, useValue: vi_VN },
    // {
    //   provide: APOLLO_OPTIONS,
    //   useFactory(httpLink: HttpLink) {
    //     return {
    //       cache: new InMemoryCache(),
    //       link: httpLink.create({
    //         uri: 'https://luycqhapxuynmnjsenei.hasura.ap-southeast-1.nhost.run/v1/graphql',
    //       }),
    //     };
    //   },
    //   deps: [HttpLink],
    // },
  ],
};
