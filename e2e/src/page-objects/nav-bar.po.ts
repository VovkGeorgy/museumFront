import {$, $$} from "protractor";

export class NavBarPage {
  private navLink = $$(".nav-link");
  private navBarLoginButton = $("#navBarLoginButton");
  private navBarSingupButton = $("#navBarSignupButton");
  private signupForm = $(".sing-up-form");
  private languageChanger = $(".language-changer");
  private profileDropdownToggle = $("#btnGroupDrop1");
  private logoutButton = $("#logoutButton");

  getNavBarTabsText() {
    return this.navLink.getText();
  }

  getNavBarTabsCol() {
    return this.navLink.count();
  }

  isLoginButtonPresent() {
    return this.navBarLoginButton.isPresent();
  }

  clickOnLoginButton() {
    this.navBarLoginButton.click();
  }

  isSignupButtonPresent() {
    return this.navBarSingupButton.isPresent();
  }

  clickOnSignupButton() {
    this.navBarSingupButton.click();
  }

  isSignupFormPresent() {
    return this.signupForm.isPresent();
  }

  isLanguageChangerPresent() {
    return this.languageChanger.isPresent();
  }

  clickOnProfileDropdownToggle() {
    this.profileDropdownToggle.click();
  }

  clickOnLogout() {
    this.logoutButton.click();
  }
}

