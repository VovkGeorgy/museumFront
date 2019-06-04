import {AppPage} from "../page-objects/anonym.po";
import {browser} from "protractor";

describe("home page check", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome in museum of History and Art");
  });

  it("should display not login notification", () => {
    expect(page.getElement("#notLoginNotification").isPresent()).toBeTruthy();
    expect(page.getElement("#notLoginNotification").getText())
      .toEqual("Please log in or sing up, to see more opportunities");
  });

  it("should display list of exhibits", () => {
    expect(page.getElements(".exhibit-card").count()).toBeGreaterThanOrEqual(9);
  });

  it("should display chat", () => {
    expect(page.getElement(".folded-chat").isPresent()).toBeTruthy();
    page.getElement(".folded-chat").click();

    expect(page.getElement(".chat-bar").isPresent()).toBeTruthy();
    expect(page.getElement(".messages-box").isPresent()).toBeTruthy();
    expect(page.getElement(".messages-box")).toBeTruthy();
  });

  it("chat should work", () => {
    expect(page.getElements(".messages").count()).toEqual(1);
    expect(page.getElements(".messages").first().getText()).toEqual("Backend carefully listens to you.");

    page.getElements(".message-input").sendKeys("test message to back");
    page.getElements(".chat-send-button").click();

    expect(page.getElements(".messages").count()).toEqual(3);
    expect(page.getElements(".messages").getText())
      .toEqual(["Backend carefully listens to you.", "test message to back", "Message from back - 0"]);
  });
});
