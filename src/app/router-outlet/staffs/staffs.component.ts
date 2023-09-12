import { Component, OnInit } from '@angular/core';
import { User } from '@nhost/nhost-js';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { StaffsService } from 'src/app/@core/services/staffs.service';

@Component({
  selector: 'lg-staffs',
  standalone: true,
  imports: [],
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss'],
  providers: [NzNotificationService],
})
export class StaffsComponent implements OnInit {
  staffs: User[] = [];
  constructor(
    private _staffs: StaffsService,
    private _noti: NzNotificationService
  ) {}

  ngOnInit() {
    this.getStaffs();
  }

  getStaffs() {
    this._staffs.getStaffs(10, 0).subscribe({
      next: (res) => {
        if (res.error) {
          this._noti.error('Lỗi', (res.error as any)[0].message, {
            nzPlacement: 'topRight',
          });
        } else {
          // this.staffs = [...res.data.users];
        }
      },
      error: () => {},
    });
  }
}
