import { Injectable } from '@angular/core';
import {
  SignInEmailPasswordParams,
  SignUpEmailPasswordParams,
} from '@nhost/nhost-js';
import { from } from 'rxjs';
import { nhost } from 'src/main';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  getUser() {
    return nhost.auth.getUser();
  }

  signUp(params: SignUpEmailPasswordParams) {
    const { email, password, options } = params;
    return from(nhost.auth.signUp({ email, password, options }));
  }

  signIn(params: SignInEmailPasswordParams) {
    const { email, password } = params;
    return from(nhost.auth.signIn({ email, password }));
  }

  getSession() {
    return nhost.auth.getSession();
  }

  signOut() {
    localStorage.clear();
    window.location.reload();
    return from(nhost.auth.signOut());
  }
}
