import { Component } from '@angular/core';
import { nhost } from 'src/main';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'lg-profile-detail',
  standalone: true,
  imports: [NzAvatarModule],
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent {
  profile = nhost.auth.getUser();
}
