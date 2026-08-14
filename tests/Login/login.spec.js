import { expect } from "@playwright/test";
import { test } from "../../fixtures/Login/loginFixture.js";
import { login_test_data } from "../../fixtures/Login/login_TestData.js";
import { LoginPage } from "../../pages/Login/login.js";

test.describe("Login Tests", () => {
  test("User should be able to Login Successfully", async ({ loginPage }) => {
    // Login is already performed by the fixture
    // Add your assertion here
  });
  test("Verify unsuccessful login with invalid credentials", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToTheSiteAndClickLogin();

    await loginPage.fillInInvalidLoginDetail(
      login_test_data.invalid_email,
      login_test_data.invalid_password,
    );
  });
});
