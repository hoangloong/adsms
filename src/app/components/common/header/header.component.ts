import { Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BaseClass } from 'src/app/@core/base/base-class';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'lg-header',
  standalone: true,
  imports: [NzLayoutModule, NzButtonModule, NzIconModule, UserMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseClass implements OnInit {
  ngOnInit(): void {
    this.config.$appConfig.subscribe((value) => (this.appConfig = value));
  }

  toggleSidebar() {
    this.config.$appConfig.next({
      ...this.appConfig,
      collapsed: !this.appConfig.collapsed,
    });
  }
}
