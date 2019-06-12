import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class VisitorGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): boolean {
    if (localStorage.getItem("authToken")) {
      if (JSON.stringify(localStorage.getItem("roles")).search("ROLE_VISITOR") !== -1) {
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
