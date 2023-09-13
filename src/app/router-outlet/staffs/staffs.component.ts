import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { User } from '@nhost/nhost-js';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { StaffsService } from 'src/app/@core/services/staffs.service';
import { PageHeaderComponent } from 'src/app/components/common/page-header/page-header.component';
import { NgFor } from '@angular/common';
import { IStaffsQuery } from 'src/app/@core/models/staffs.model';
import { BaseClass } from 'src/app/@core/base/base-class';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { FormStaffComponent } from 'src/app/components/forms/form-staff/form-staff.component';
import { AuthService } from 'src/app/@core/services/auth.service';
import { createFragmentRegistry } from '@apollo/client/cache';
import { gql } from 'apollo-angular';

@Component({
  selector: 'lg-staffs',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NzSpaceModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzTableModule,
    NgFor,
  ],
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss'],
  providers: [NzNotificationService, NzDrawerService],
})
export class StaffsComponent extends BaseClass implements OnInit {
  @ViewChild('footerStaffDrawer')
  footerStaffDrawer!: TemplateRef<HTMLDivElement>;
  staffs: User[] = [];
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<string>();
  staffDrawer!: NzDrawerRef<FormStaffComponent>;

  constructor(
    private _staffs: StaffsService,
    private _noti: NzNotificationService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _drawer: NzDrawerService
  ) {
    super();
  }

  ngOnInit() {
    const query = this._route.snapshot.queryParams;
    this.limit = parseInt(query['limit']) || this.limit;
    this.offset = parseInt(query['offset']) || this.offset;

    this.getStaffs();
  }

  getStaffs() {
    this.fetchingData = true;

    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        limit: this.limit,
        offset: this.offset,
      },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });

    const userField = [
      'id',
      'avatarUrl',
      'displayName',
      'phoneNumber',
      'email',
      'defaultRole',
      'disabled',
      'createdAt',
      'updatedAt',
      'lastSeen',
    ];

    this._staffs
      .getStaffs(this.limit, this.offset, userField.join(' '))
      .pipe(this.unsubsribeOnDestroy)
      .subscribe({
        next: (res) => {
          if (res.error) {
            this._noti.error('Lỗi', res.error[0].message, {
              nzPlacement: 'topRight',
            });
          } else {
            this.staffs = [...res.data['users']];
          }
        },
        error: () => {},
        complete: () => {
          this.fetchingData = false;
        },
      });
  }

  handlePageSizeChange(e: number) {
    this.limit = e;
    this.getStaffs();
  }

  handlePageIndexChange(e: number) {
    this.offset = e;
    this.getStaffs();
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.staffs.forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  refreshCheckedStatus(): void {
    this.checked = this.staffs.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate =
      this.staffs.some(({ id }) => this.setOfCheckedId.has(id)) &&
      !this.checked;
  }

  handeAddStaffClick() {
    this.staffDrawer = this._drawer.create({
      nzTitle: 'Thêm nhân viên',
      nzContent: FormStaffComponent,
      nzContentParams: {
        handleSubmit: () => {
          this.handleAddStaff();
        },
      },
      nzFooter: this.footerStaffDrawer,
    });
  }

  handleAddStaff() {
    const contentComponent = this.staffDrawer.getContentComponent();
    if (contentComponent?.formStaff.valid) {
      const { email, displayName, phoneNumber } =
        contentComponent.formStaff.value;
      this._staffs.addStaff().subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (res) => {
          console.log(res);
        },
      });
    } else {
      contentComponent?.formStaff.markAllAsTouched();
    }
  }

  closeDrawer() {
    this.staffDrawer.close();
  }
}
