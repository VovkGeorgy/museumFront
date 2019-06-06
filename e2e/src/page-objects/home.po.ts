import {$, $$, browser} from "protractor";

export class HomePage {

  isVelcomeMessagePresent() {
    return $(".welcome-text").isPresent();
  }

  getVelcomeMessageText() {
    return $("app-home h2").getText();
  }

  isNotLoginNotificationIsPresent() {
    return $("#notLoginNotification").isPresent;
  }

  getNotLoginNotificationText() {
    return $("#notLoginNotification").getText();
  }

  getExhibitsCount() {
    return $$(".exhibit-card").count();
  }
}
