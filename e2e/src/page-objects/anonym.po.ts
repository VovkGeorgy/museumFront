import {$, $$, browser, by, element} from "protractor";

export class AppPage {

  navigateTo() {
    return browser.get("/");
  }

  getParagraphText() {
    return element(by.css("app-home h2")).getText();
  }

  getNavBarTabsText() {
    return $$(".nav-link").map(elem => elem.getText());
  }

  getElement(template: string) {
    return $(template);
  }

  getElements(template: string) {
    return $$(template);
  }
}
