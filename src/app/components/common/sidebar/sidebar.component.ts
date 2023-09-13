import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { MENU_NAVIGATION } from 'src/app/@core/constants/menu-nav.const';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BaseClass } from 'src/app/@core/base/base-class';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lg-sidebar',
  standalone: true,
  imports: [
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
    NgFor,
    NgIf,
    NgTemplateOutlet,
    RouterLink,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent extends BaseClass {
  menus = MENU_NAVIGATION;
  router = window.location.pathname;
  ngOnInit(): void {
    this.config?.$appConfig.subscribe((value) => (this.appConfig = value));
  }
}
