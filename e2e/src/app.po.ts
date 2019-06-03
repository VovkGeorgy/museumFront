import {browser, by, element} from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getParagraphText() {
    return element(by.css("app-home h2")).getText();
  }

  getNavBarTabsText() {
    return element.all((by.className("nav-link"))).map(elem => elem.getText()).then(value => value);
  }
}
