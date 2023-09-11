import { Injectable, NgZone } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { nhost } from 'src/main';

@Injectable({
  providedIn: 'root',
})
export class UnauthGuard implements CanActivate {
  constructor(
    protected readonly router: Router,
    private _auth: AuthService,
    private _zone: NgZone
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authenticated = await nhost.auth.isAuthenticatedAsync();
    if (authenticated) {
      this._zone.run(() => {
        this.router.navigateByUrl('/');
      });
      return false;
    }
    return true;
  }
}
