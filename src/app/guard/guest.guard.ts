import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class GuestGuard implements CanActivate {

  constructor(private router: Router,
              private cookieService: CookieService) {
  }

  canActivate(): boolean {
    if (this.cookieService.get('jwtAccess')) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
