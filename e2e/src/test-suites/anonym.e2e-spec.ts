import {browser} from "protractor";
import {HomePage} from "../page-objects/home.po";
import {NavBarPage} from "../page-objects/nav-bar.po";
import {ChatPage} from "../page-objects/chat.po";

describe("home page check", () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
    browser.driver.manage().window().maximize();
  });

  it("should display welcome message", () => {
    homePage.navigateTo();
    expect(homePage.getVelcomeMessageText()).toEqual("Welcome in museum of History and Art");
  });

  it("should display not login notification", () => {
    expect(homePage.getNotLoginNotificationText()).toEqual("Please log in or sing up, to see more opportunities");
  });

  it("should display list of exhibits", () => {
    expect(homePage.getExhibitsCount()).toBeGreaterThanOrEqual(9);
  });

});

describe("chat check", () => {
  let chat: ChatPage;

  beforeEach(() => {
    chat = new ChatPage();
    browser.driver.manage().window().maximize();
  });

  it("should display chat", () => {
    chat.clickOnFoldedChat();
    expect(chat.isChatHasUnFolded()).toBeTruthy();
  });

  it("chat should work", () => {
    expect(chat.getBackendWelcomeMessage()).toEqual("Backend carefully listens to you.");

    chat.writeMessageinChatInput("test");
    chat.sendChatMessage();

    expect(chat.getMessagesCount()).toBeGreaterThanOrEqual(3);
    expect(chat.getLastMessageText()).toEqual("Message from back - 0");
  });
});


describe("nav-bar check", () => {
  let navBar: NavBarPage;

  beforeEach(() => {
    navBar = new NavBarPage();
    browser.driver.manage().window().maximize();
  });

  it("should display three nav tabs", () => {
    expect(navBar.getNavBarTabsCol()).toEqual(3);
    expect(navBar.getNavBarTabsText()).toEqual(["Home", "Exhibits", "About us"]);
  });

  it("should display login component", () => {
    expect(navBar.isLoginButtonPresent()).toBeTruthy();
    navBar.clickOnLoginButton();
    expect(navBar.isLoginFormPresent()).toBeTruthy();
  });

  it("should display sign-up component", () => {

    expect(navBar.isSignupButtonPresent()).toBeTruthy();
    navBar.clickOnSignupButton();
    expect(navBar.isSignupFormPresent()).toBeTruthy();
  });

  it("should display language changer", () => {
    expect(navBar.isLanguageChangerPresent()).toBeTruthy();
  });
});
