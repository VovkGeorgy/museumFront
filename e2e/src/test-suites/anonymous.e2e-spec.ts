import {HomePage} from "../page-objects/home.po";
import {NavBarPage} from "../page-objects/nav-bar.po";
import {ChatPage} from "../page-objects/chat.po";
import {NavigationUtil} from "../utils/navigation.util";
import {LoginPage} from "../page-objects/login.po";

describe("anonymous user functionality check", () => {
  let homePage: HomePage;

  beforeAll(() => {
    homePage = new HomePage();
    NavigationUtil.navigateHomePage();
  });

  describe("home page check", () => {
    it("should display welcome message", () => {
      expect(homePage.isVelcomeMessagePresent()).toBeTruthy();
      expect(homePage.getVelcomeMessageText()).toEqual("Welcome in museum of History and Art");
    });

    it("should display not login notification", () => {
      expect(homePage.isNotLoginNotificationIsPresent()).toBeTruthy();
      expect(homePage.getNotLoginNotificationText()).toEqual("Please log in or sing up, to see more opportunities");
    });

    it("should display list of exhibits", () => {
      expect(homePage.getExhibitsCount()).toBeGreaterThanOrEqual(9);
    });
  });

  describe("chat check", () => {
    let chat: ChatPage;

    beforeAll(() => {
      chat = new ChatPage();
    });

    it("should display chat", () => {
      expect(chat.isFoldedChatPresent()).toBeTruthy();
      chat.clickOnFoldedChat();
      expect(chat.isUnFoldedChatPresent()).toBeTruthy();
    });

    it("chat should work", () => {
      expect(chat.getBackendWelcomeMessage()).toEqual("Backend carefully listens to you.");

      chat.writeMessageInChatInput("test");
      chat.sendChatMessage();

      expect(chat.getMessagesCount()).toBeGreaterThanOrEqual(3);
      expect(chat.getLastMessageText()).toEqual("Message from back - 0");
    });
  });

  describe("nav-bar check", () => {
    let navBar: NavBarPage;
    let loginPage: LoginPage;

    beforeAll(() => {
      navBar = new NavBarPage();
      loginPage = new LoginPage();
    });

    it("should display three nav tabs", () => {
      expect(navBar.getNavBarTabsCol()).toEqual(3);
      expect(navBar.getNavBarTabsText()).toEqual(["Home", "Exhibits", "About us"]);
    });

    it("should display login component", () => {
      expect(navBar.isLoginButtonPresent()).toBeTruthy();
      navBar.clickOnLoginButton();
      expect(loginPage.isLoginFormPresent()).toBeTruthy();
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

});
