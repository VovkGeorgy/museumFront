import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router,
              private cookieService: CookieService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.cookieService.get('jwtAccess')) {
      console.log(this.cookieService.get('jwtAccess'));
      if (JSON.stringify(this.cookieService.get('roles')).search('ROLE_ADMIN') !== -1) {
        return true;
      } else {
        console.log('HAS NO NEEDED ROLE');
        this.router.navigate(['/403']);
        return false;
      }

    } else {
      console.log('NOT AN ADMIN ROLE');
      let row = 'Only for admin, please login';
      // this.router.navigate(['/getToken'], { queryParams: { returnUrl: state.url }});
      this.router.navigate(['/login']);
      return false;
    }
  }
}

