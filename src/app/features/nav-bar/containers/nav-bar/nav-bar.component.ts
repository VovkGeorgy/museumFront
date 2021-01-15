import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {AuthActionTypes, AuthLogout} from "../../../../core/store/actions/auth.actions";
import {select, Store} from "@ngrx/store";
import {navTabs} from "../../constants/nav-tabs";
import {Actions, ofType} from "@ngrx/effects";
import {State} from "../../../../core/store";
import {getProfileLink, getUsername, isSigned} from "../../../../core/store/selectors/auth.selectors";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              private translate: TranslateService,
              private store: Store<State>,
              private storeActions: Actions) {
  }

  username$ = this.store.pipe(select(getUsername));
  profileLink$ = this.store.pipe(select(getProfileLink));
  isSignedIn$ = this.store.pipe(select(isSigned));
  tabs = this.getAllowedTabs();

  ngOnInit() {
    this.storeActions.pipe(
      ofType(AuthActionTypes.authLoginSuccess),
    ).subscribe(() => {
      this.tabs = this.getAllowedTabs();
    });
  }

  logout() {
    this.store.dispatch(new AuthLogout());
    this.tabs = this.getAllowedTabs();
    this.router.navigate(["/"]);
  }

  getAllowedTabs() {
    const roles = localStorage.getItem("roles");
    if (!roles) {
      return navTabs.filter(tab => tab.canActive === null);
    }
    return navTabs.filter(tab => {
      return roles.includes(tab.canActive) || tab.canActive === null;
    });
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
