import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router,
              private cookieService: CookieService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.cookieService.get('jwtAccess')) {
      if (JSON.stringify(this.cookieService.get('roles')).search('ROLE_ADMIN') !== -1) {
        return true;
      } else {
        this.router.navigate(['/403']);
        return false;
      }

    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

