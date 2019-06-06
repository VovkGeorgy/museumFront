import {$, $$} from "protractor";

export class NavBarPage {
  private navLink = $$(".nav-link");
  private navBarLoginButton = $("#navBarLoginButton");
  private navBarSingupButton = $("#navBarSignupButton");
  private loginForm = $(".login-form");
  private signupForm = $(".sing-up-form");
  private languageChanger = $(".language-changer");

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

  isLoginFormPresent() {
    return this.loginForm.isPresent();
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
}
