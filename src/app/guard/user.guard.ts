import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class UserGuard implements CanActivate {

  constructor(private router: Router,
              private cookieService: CookieService) {
  }

  canActivate(): boolean {
    // if (this.cookieService.get('jwtAccess')) {
    //   this.router.navigate(['/login']);
    //   return false;
    // } else {
    //   return true;
    // }

    if (this.cookieService.get('jwtAccess')) {
      if (JSON.stringify(this.cookieService.get('roles')).search('ROLE_USER') !== -1) {
        return true;
      } else {
        this.router.navigate(['/403']);
        return false;
      }

    } else {
      this.router.navigate(['/403']);
      return false;
    }
  }
}
