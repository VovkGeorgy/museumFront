import {$, $$, browser, by, element} from "protractor";

export class HomePage {
  navigateTo() {
    return browser.get("/");
  }

  getVelcomeMessageText() {
    expect($(".welcome-text").isPresent()).toBeTruthy();
    return $("app-home h2").getText();
  }

  getNotLoginNotificationText() {
    const notLoginNotification = $("#notLoginNotification");
    expect(notLoginNotification.isPresent).toBeTruthy();
    return notLoginNotification.getText();
  }

  getExhibitsCount() {
    expect($$(".exhibit-card").count()).toBeGreaterThan(0);
    return $$(".exhibit-card").count();
  }
}
