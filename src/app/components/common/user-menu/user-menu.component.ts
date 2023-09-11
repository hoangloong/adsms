import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'lg-user-menu',
  standalone: true,
  imports: [NzDropDownModule, NzIconModule, NzAvatarModule, NzButtonModule],
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {}
