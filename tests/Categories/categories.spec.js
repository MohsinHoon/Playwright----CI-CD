import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/Login/login.js";
import { USER_EMAIL, USER_PASSWORD } from "../../config/enviroment.js";
import { Categories_Page } from "../../pages/Categories/categories.js";
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToTheSiteAndClickLogin();
  await loginPage.fillInLoginDetail(USER_EMAIL, USER_PASSWORD);
});
test.describe("Add Product From Categories Page", () => {
  test("User can navigate to the category page", async ({ page }) => {
    const navigate_to_the_product_categories_page = new Categories_Page(page);
    await navigate_to_the_product_categories_page.navigateToTheProductviaCategories();
  });
});
