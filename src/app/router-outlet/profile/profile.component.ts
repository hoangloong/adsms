import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from 'src/app/components/common/page-header/page-header.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

@Component({
  selector: 'lg-profile',
  standalone: true,
  imports: [PageHeaderComponent, ProfileDetailComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {}
