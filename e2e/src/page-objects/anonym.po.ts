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

  getNavBarTabsCol() {
    return $$(".nav-link").count();
  }

  getElementById(id: string) {
    return element(by.id(id));
  }

  getElement(template: string) {
    return $(template);
  }

  getElements(template: string) {
    return $$(template);
  }
}
