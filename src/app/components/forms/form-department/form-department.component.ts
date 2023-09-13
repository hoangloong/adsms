import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { User } from '@nhost/nhost-js';
import { StaffsService } from 'src/app/@core/services/staffs.service';
import { BaseClass } from 'src/app/@core/base/base-class';

@Component({
  selector: 'lg-form-department',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NgFor,
  ],
  templateUrl: './form-department.component.html',
  styleUrls: ['./form-department.component.scss'],
})
export class FormDepartmentComponent extends BaseClass implements OnInit {
  @Input({ required: true }) handleSubmit: Function = (): void => {};
  formDepartment = this._formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    staffs: [[]],
    child: [[]],
  });
  staffs: User[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _staff: StaffsService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getStaffs();
  }

  getStaffs() {
    const fieldQuery = ['id', 'displayName'];
    this._staff
      .getStaffs(20, 0, fieldQuery.join(' '))
      .pipe(this.unsubsribeOnDestroy)
      .subscribe({
        next: (res) => {
          if (res.data) {
            this.staffs = [...this.staffs, ...res.data.users];
          }
        },
        error: () => {},
      });
  }
}
