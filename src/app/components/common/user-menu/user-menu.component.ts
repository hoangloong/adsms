import { Component, OnInit } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from '@nhost/nhost-js';
import { nhost } from 'src/main';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'lg-user-menu',
  standalone: true,
  imports: [
    NzDropDownModule,
    NzIconModule,
    NzAvatarModule,
    NzButtonModule,
    RouterLink,
  ],
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  profile!: User | null;
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this.profile = nhost.auth.getUser();
  }

  handleSignOut() {
    this._auth.signOut().subscribe();
  }
}
