import {$, $$} from "protractor";

export class NavBarPage {
  getNavBarTabsText() {
    return $$(".nav-link").getText();
  }

  getNavBarTabsCol() {
    return $$(".nav-link").count();
  }

  isLoginButtonPresent() {
    return $("#navBarLoginButton").isPresent();
  }

  clickOnLoginButton() {
    $("#navBarLoginButton").click();
  }

  isLoginFormPresent() {
    return $(".login-form").isPresent();
  }

  isSignupButtonPresent() {
    return $("#navBarSignupButton").isPresent();
  }

  clickOnSignupButton() {
    $("#navBarSignupButton").click();
  }

  isSignupFormPresent() {
    return $(".sing-up-form").isPresent();
  }

  isLanguageChangerPresent() {
    return $(".language-changer").isPresent();
  }
}
