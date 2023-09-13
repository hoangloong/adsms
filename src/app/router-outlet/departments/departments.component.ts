import { NgFor } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { BaseClass } from 'src/app/@core/base/base-class';
import {
  IAddDepartment,
  IDepartment,
} from 'src/app/@core/models/department.model';
import { DeparmentService } from 'src/app/@core/services/department.service';
import { PageHeaderComponent } from 'src/app/components/common/page-header/page-header.component';
import { FormDepartmentComponent } from 'src/app/components/forms/form-department/form-department.component';
import { nhost } from 'src/main';

@Component({
  selector: 'lg-departments',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NzSpaceModule,
    NzButtonModule,
    NzTableModule,
    NgFor,
  ],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
  providers: [NzNotificationService, NzDrawerService, NzModalService],
})
export class DepartmentsComponent extends BaseClass implements OnInit {
  @ViewChild('footerDepartmentDrawer')
  footerDepartmentDrawer!: TemplateRef<HTMLDivElement>;
  departments: IDepartment[] = [];
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<string>();
  deparmentDrawer!: NzDrawerRef<FormDepartmentComponent>;

  constructor(
    private _noti: NzNotificationService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _drawer: NzDrawerService,
    private _modal: NzModalService,
    private _department: DeparmentService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    const fieldQuery = ['id', 'name', 'description', 'staffs', 'child'];
    this._department
      .getDepartments(this.limit, this.offset, fieldQuery.join(' '))
      .pipe(this.unsubsribeOnDestroy)
      .subscribe({
        next: (res) => {
          if (res.data) {
            this.departments = res.data.departments;
          }
        },
        error: () => {},
      });
  }

  handlePageSizeChange(e: number) {}

  handlePageIndexChange(e: number) {}

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.departments.forEach(({ id }) => this.updateCheckedSet(id, checked));
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
    this.checked = this.departments.every(({ id }) =>
      this.setOfCheckedId.has(id)
    );
    this.indeterminate =
      this.departments.some(({ id }) => this.setOfCheckedId.has(id)) &&
      !this.checked;
  }

  handleAddDepartmentClick() {
    this.deparmentDrawer = this._drawer.create({
      nzTitle: 'Phòng ban',
      nzContent: FormDepartmentComponent,
      nzContentParams: {
        handleSubmit: () => {
          this.handleAddDepartment();
        },
      },
      nzFooter: this.footerDepartmentDrawer,
    });
  }

  handleAddDepartment() {
    const departmentForm =
      this.deparmentDrawer.getContentComponent()!.formDepartment;
    if (departmentForm.valid) {
      const { name, description, staffs, child } = departmentForm.value;
      const department: IAddDepartment = {
        name: name!,
        description: description!,
        staffs: staffs!,
        child: child!,
        // modifiedBy: nhost.auth.getUser()!.id,
      };

      this._department
        .addDepartments([department])
        .pipe(this.unsubsribeOnDestroy)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (err) => {},
        });
    } else {
      departmentForm.markAllAsTouched();
    }
  }

  handleDeleteClick() {}
}
