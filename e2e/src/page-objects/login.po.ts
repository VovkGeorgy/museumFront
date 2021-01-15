import {$} from "protractor";

export class LoginPage {
  private loginForm = $(".login-form");
  private usernameInput = $("#username");
  private passwordInput = $("#password");
  private loginSubmitButton = $("#loginSubmitButton");

  isLoginFormPresent() {
    return this.loginForm.isPresent();
  }

  inputUsername(message: string) {
    this.usernameInput.sendKeys(message);
  }

  inputPassword(message: string) {
    this.passwordInput.sendKeys(message);
  }

  loginButtonClick() {
    this.loginSubmitButton.click();
  }
}
