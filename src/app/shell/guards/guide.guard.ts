import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class GuideGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem("authToken")) {
      if (JSON.stringify(localStorage.getItem("roles")).search("ROLE_GUIDE") !== -1) {
        return true;
      } else {
        this.router.navigate(["/403"]);
        return false;
      }
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
