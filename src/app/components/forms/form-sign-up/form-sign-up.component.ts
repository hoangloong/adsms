import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  regPassword,
  regUpperCase,
  regLowerCase,
  regDigit,
  regSpecialCharacter,
} from 'src/app/@core/common/regex';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'lg-form-sign-up',
  standalone: true,
  imports: [
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NgIf,
  ],
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss'],
})
export class FormSignUpComponent {
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.formSignUp.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  formSignUp: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(regPassword),
      ],
    ],
    confirm_password: ['', [Validators.required, this.confirmationValidator]],
    full_name: ['', [Validators.required]],
    phone_number: ['', [Validators.required]],
  });

  regexUpperCase = regUpperCase;
  regexLowerCase = regLowerCase;
  regexDigit = regDigit;
  regexSpecialCharacter = regSpecialCharacter;

  constructor(private _formBuilder: FormBuilder, private _auth: AuthService) {}

  async handleSignUp() {
    if (this.formSignUp.valid) {
      const { email, password, full_name, phone_number } =
        this.formSignUp.value;
      this._auth
        .signUp({
          email,
          password,
          options: {
            allowedRoles: ['user'],
            defaultRole: 'user',
            redirectTo: '/sesssion/sign-in',
            metadata: {
              full_name,
              phone_number,
            },
          },
        })
        .subscribe({ next: () => {}, error: () => {} });
    } else {
      this.formSignUp.markAllAsTouched();
    }
  }
}
