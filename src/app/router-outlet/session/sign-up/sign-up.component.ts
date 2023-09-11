import { Component } from '@angular/core';
import { FormSignUpComponent } from 'src/app/components/forms/form-sign-up/form-sign-up.component';

@Component({
  selector: 'lg-sign-up',
  standalone: true,
  imports: [FormSignUpComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {}
