import {browser} from "protractor";

export class NavigationUtil {
  static navigateHomePage() {
    return browser.get("/");
  }
}
