import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../../../../core/services/auth.service";
import {AuthLogout} from "../../../../core/store/actions/auth.actions";
import {Store} from "@ngrx/store";
import * as authReducer from "../../../../core/store/reducers/auth.reducer";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              private translate: TranslateService,
              private store: Store<authReducer.State>,
              private authService: AuthService) {
  }

  logButtonName: any;

  ngOnInit() {
    this.logButtonName = this.translate.get("button.login");
  }

  logout() {
    this.store.dispatch(new AuthLogout());
    this.router.navigate(["/"]);
  }

  hasSignedIn() {
    if (localStorage.getItem("username")) {
      this.logButtonName = localStorage.getItem("username");
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
