import { Component, OnInit } from '@angular/core';
import { BaseClass } from '../base/base-class';
import { ConfigService } from '../services/app-config.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { SettingOutline } from '@ant-design/icons-angular/icons';
import { HorizontalComponent } from './horizontal/horizontal.component';

@Component({
  selector: 'lg-layouts',
  standalone: true,
  imports: [NzButtonModule, NzIconModule, HorizontalComponent],
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
  providers: [NzDrawerService],
})
export class LayoutsComponent extends BaseClass implements OnInit {
  constructor(
    private _config: ConfigService,
    private _drawer: NzDrawerService
  ) {
    super(_config);
  }

  ngOnInit(): void {}

  openConfigDrawer() {
    const configDrawer = this._drawer.create({
      // nzContent: ''
    });
  }
}
