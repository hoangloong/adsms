import { Routes } from '@angular/router';
import { LayoutsComponent } from './@core/layouts/layouts.component';
import { AuthGuard } from './@core/guards/auth.guard';
import { UnauthGuard } from './@core/guards/unauth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    resolve: [],
    component: LayoutsComponent,
    children: [
      {
        data: {
          docTitle: 'string',
          pageTitle: 'string',
          pageSubtitle: 'string',
          breadcrumb: [],
        },
        path: 'staffs',
        loadComponent: () =>
          import('./router-outlet/staffs/staffs.component').then(
            (c) => c.StaffsComponent
          ),
      },
    ],
  },
  {
    path: 'session',
    canActivate: [UnauthGuard],
    children: [
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./router-outlet/session/sign-in/sign-in.component').then(
            (c) => c.SignInComponent
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./router-outlet/session/sign-up/sign-up.component').then(
            (c) => c.SignUpComponent
          ),
      },
    ],
  },
];
