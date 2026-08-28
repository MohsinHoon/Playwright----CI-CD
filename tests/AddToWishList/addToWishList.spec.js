import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/Login/login.js";
import { USER_EMAIL, USER_PASSWORD } from "../../config/enviroment.js";
import { addToWishListTestData } from "../../fixtures/AddToWishList/addToWishList_TestData.js";
import { AddToWishListPage } from "../../pages/AddToWishList/addToWishList.js";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToTheSiteAndClickLogin();
  await loginPage.fillInLoginDetail(USER_EMAIL, USER_PASSWORD);
});

test.describe("Add To WishList Tests", () => {
  test("User can add a product to the wishlist", async ({ page }) => {
    const add_To_Wish_List = new AddToWishListPage(page);
    await add_To_Wish_List.addProductToWishList(
      addToWishListTestData.recipient_Name,
      addToWishListTestData.recipient_Email,
      addToWishListTestData.product_Name,
    );
  });

  test("User can add wishlist products to cart", async ({ page }) => {
    const add_To_Wish_List = new AddToWishListPage(page);
    await add_To_Wish_List.addWishListItemsToCart();
  });

  test("User can remove products from wishlist", async ({ page }) => {
    const add_To_Wish_List = new AddToWishListPage(page);
    await add_To_Wish_List.removeProductFromWishList();
  });
});
