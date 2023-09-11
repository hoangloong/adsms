import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FormSignInComponent } from 'src/app/components/forms/form-sign-in/form-sign-in.component';

@Component({
  selector: 'lg-sign-in',
  standalone: true,
  imports: [FormSignInComponent, NzDividerModule, NzButtonModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private _router: Router) {}

  handleClickSignUp() {
    this._router.navigateByUrl('/session/sign-up');
  }
}
