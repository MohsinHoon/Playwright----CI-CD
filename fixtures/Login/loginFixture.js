import { test as base } from "@playwright/test";
import { LoginPage } from "../../pages/Login/login.js";
import { login_test_data } from "./login_TestData.js";
import { USER_EMAIL, USER_PASSWORD } from "../../config/enviroment.js";

export const test = base.extend({
  loginPage: [
    async ({ page }, use) => {
      const loginPage = new LoginPage(page);

      await loginPage.navigateToTheSiteAndClickLogin();

      await loginPage.fillInLoginDetail(
        USER_EMAIL ,
        USER_PASSWORD 
      );

      await use(loginPage);
    },
    { auto: true },
  ],
});
