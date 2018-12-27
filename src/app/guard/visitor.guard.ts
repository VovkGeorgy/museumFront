import {Injectable} from "@angular/core";
import {Router, CanActivate} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class VisitorGuard implements CanActivate {
  constructor(private router: Router,
              private cookieService: CookieService) {
  }

  canActivate(): boolean {
    if (this.cookieService.get("jwtAccess")) {
      if (JSON.stringify(this.cookieService.get("roles")).search("ROLE_VISITOR") !== -1) {
        return true;
      } else {
        this.router.navigate(["/403"]);
        return false;
      }

    } else {
      this.router.navigate(["/403"]);
      return false;
    }
  }
}
