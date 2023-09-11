import { Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderComponent } from 'src/app/components/common/header/header.component';
import { SidebarComponent } from 'src/app/components/common/sidebar/sidebar.component';
import { BaseClass } from '../../base/base-class';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lg-horizontal',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    NzLayoutModule,
    NzMenuModule,
    RouterOutlet,
  ],
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss'],
})
export class HorizontalComponent extends BaseClass implements OnInit {
  ngOnInit(): void {
    this.config.$appConfig.subscribe((value) => (this.appConfig = value));
  }
}
