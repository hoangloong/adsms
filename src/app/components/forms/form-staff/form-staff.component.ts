import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  regUpperCase,
  regLowerCase,
  regDigit,
  regSpecialCharacter,
  regPassword,
} from 'src/app/@core/common/regex';

@Component({
  selector: 'lg-form-staff',
  standalone: true,
  imports: [
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NgIf,
  ],
  templateUrl: './form-staff.component.html',
  styleUrls: ['./form-staff.component.scss'],
})
export class FormStaffComponent {
  @Input({ required: true }) handleSubmit: Function = (): void => {};
  formStaff = this._formBuilder.group({
    displayName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required]],
  });
  regexUpperCase = regUpperCase;
  regexLowerCase = regLowerCase;
  regexDigit = regDigit;
  regexSpecialCharacter = regSpecialCharacter;

  constructor(private _formBuilder: FormBuilder) {}
}
