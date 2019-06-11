import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              private cookieService: CookieService,
              private translate: TranslateService,
              private authService: AuthService) {
  }

  logButtonName: any;

  ngOnInit() {
    this.logButtonName = this.translate.get("button.login");
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  hasSignedIn() {
    if (this.cookieService.get("username")) {
      this.logButtonName = this.cookieService.get("username");
      return true;
    }
    return false;
  }

  goToProfileEditor() {
    if (this.isAdmin()) {
      this.router.navigate(["/"]);
      return;
    }
    if (this.isGuide()) {
      this.router.navigate(["/guide-profile"]);
      return;
    }
    if (this.isVisitor()) {
      this.router.navigate(["/visitor-profile"]);
    }
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isGuide() {
    return this.authService.isGuide();
  }

  isVisitor() {
    return this.authService.isVisitor();
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
