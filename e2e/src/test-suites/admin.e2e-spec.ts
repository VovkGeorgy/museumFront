import {NavBarPage} from "../page-objects/nav-bar.po";
import {LoginPage} from "../page-objects/login.po";
import {HomePage} from "../page-objects/home.po";
import {NavigationUtil} from "../utils/navigation.util";

describe("admin user functionality check", () => {

  describe("login check", () => {
    let navBar: NavBarPage;
    let homePage: HomePage;
    let loginPage: LoginPage;

    beforeAll(() => {
      navBar = new NavBarPage();
      loginPage = new LoginPage();
      homePage = new HomePage();
      NavigationUtil.navigateHomePage();
    });

    it("should open login form", () => {
      expect(navBar.isLoginButtonPresent()).toBeTruthy();
      navBar.clickOnLoginButton();
      expect(loginPage.isLoginFormPresent()).toBeTruthy();
    });

    it("should login like admin", () => {
      loginPage.inputUsername("admin");
      loginPage.inputPassword("11111");
      loginPage.loginButtonClick();
      expect(navBar.getNavBarTabsCol()).toEqual(6);
      expect(homePage.isNotLoginNotificationIsPresent()).toBeFalsy();
    });

    it("should logout", () => {
      navBar.clickOnProfileDropdownToggle();
      navBar.clickOnLogout();
      expect(navBar.getNavBarTabsCol()).toEqual(3);
      expect(homePage.isNotLoginNotificationIsPresent()).toBeTruthy();
    });
  });
});


