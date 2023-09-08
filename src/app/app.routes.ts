import { Routes } from '@angular/router';
import { LayoutsComponent } from './@core/layouts/layouts.component';

export const routes: Routes = [
  { path: '', component: LayoutsComponent, children: [] },
];
