import {AppPage} from "./app.po";
import {browser} from "protractor";

describe("museum-front App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it("should display welcome message", async () => {
    page.navigateTo();
    expect(await page.getParagraphText()).toEqual("Welcome in museum of History and Art");
  });

  it("should display nav bar", () => {
    expect(page.getNavBarTabsText().then).toEqual("Home");
  });
});
