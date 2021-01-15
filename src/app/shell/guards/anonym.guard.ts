import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AnonymGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    if (localStorage.getItem("authToken")) {
      this.router.navigate(["/"]);
      return false;
    } else {
      return true;
    }
  }
}
