import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'lg-form-sign-in',
  standalone: true,
  imports: [NzFormModule, NzInputModule, ReactiveFormsModule, NzButtonModule],
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss'],
})
export class FormSignInComponent {
  formSignIn: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {}

  handleSignIn() {
    if (this.formSignIn.valid) {
      this._auth.signIn(this.formSignIn.value).subscribe({
        next: (res) => {
          if (res.session) {
            this._router.navigateByUrl('/');
          }
          if (res.error) {
          }
        },
        error: () => {},
      });
    } else {
      this.formSignIn.markAllAsTouched();
    }
  }
}
