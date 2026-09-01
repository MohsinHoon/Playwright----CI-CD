import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/Login/login.js";
import { USER_EMAIL, USER_PASSWORD } from "../../config/enviroment.js";
import { CheckOutPage } from "../../pages/CheckOut/checkout.js";
import { checkoutTestData } from "../../fixtures/Checkout/checkOut_TestData.js";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToTheSiteAndClickLogin();
  await loginPage.fillInLoginDetail(USER_EMAIL, USER_PASSWORD);
});

test.describe("Complete Userflow", () => {
  test("User can add product to cart and then checkout the page", async ({
    page,
  }) => {
    const proceed_to_checkout_page = new CheckOutPage(page);
    await proceed_to_checkout_page.proceedToCheckOutPage(
      checkoutTestData.companyName,
      checkoutTestData.countryName,
      checkoutTestData.cityName,
      checkoutTestData.address1,
      checkoutTestData.address2,
      checkoutTestData.postalCode,
      checkoutTestData.phoneNumber,
      checkoutTestData.faxNumber,
    );
  });
});
