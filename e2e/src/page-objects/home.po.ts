import {$, $$} from "protractor";

export class HomePage {
  private notLoginNotification = $("#notLoginNotification");
  private welcomeMessage = $(".welcome-text");
  private exhibitCards = $$(".exhibit-card");

  isVelcomeMessagePresent() {
    return this.welcomeMessage.isPresent();
  }

  getVelcomeMessageText() {
    return this.welcomeMessage.getText();
  }

  isNotLoginNotificationIsPresent() {
    return this.notLoginNotification.isPresent;
  }

  getNotLoginNotificationText() {
    return this.notLoginNotification.getText();
  }

  getExhibitsCount() {
    return this.exhibitCards.count();
  }
}
