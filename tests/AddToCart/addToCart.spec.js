import { test } from "../../fixtures/Login/loginFixture.js";
import { Add_To_Cart } from "../../pages/AddToCart/addToCart.js";
import { addTOCartData } from "../../fixtures/AddToCart/addToCart_TestData.js";
import { LoginPage } from "../../pages/Login/login.js";
import { USER_EMAIL, USER_PASSWORD } from "../../config/enviroment.js";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToTheSiteAndClickLogin();
  await loginPage.fillInLoginDetail(USER_EMAIL, USER_PASSWORD);
});

test.describe("Add To Cart Tests", () => {
  test("User Should be Able To Add Products to the Cart Successfully", async ({
    page,
  }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.addProductsToCartViaSearching(addTOCartData.item_name);
  });

  test("User Should be Able To Add Products to the Cart from the homepage", async ({
    page,
  }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.addProductToCartFromHomePage();
  });

  test("User Should be Able To Add Products to the Cart with Incrementing Quantity", async ({
    page,
  }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.addProductToCartWithIncrementingQuantity(
      addTOCartData.incremental_quantity,
    );
  });

  test("User Entering invalid product name", async ({ page }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.searchWithInvalidProductName(
      addTOCartData.invalid_product_name,
    );
  });
  test("User should be able to search with an Empty field", async ({
    page,
  }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.searchWithEmptySearchFields();
  });
  test("User should able to navigate to the product details page", async ({
    page,
  }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.navigateToProductDetailsPage();
  });

  test("User should be able to verify the product details", async ({
    page,
  }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.verifyProductDetaisAreDisplayedCorrectly(
      addTOCartData.product_title,
      addTOCartData.product_price,
      addTOCartData.product_description,
    );
  });
  test("User should be able to add multiple products to the cart", async ({
    page,
  }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.addMultipleProductsToCart(
      addTOCartData.recipientName,
      addTOCartData.recipientEmail,
    );
  });
  test("User should be able to decresed the quantity if products", async ({
    page,
  }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.decreaseProductQuantityInCart(
      addTOCartData.decresedQuantity,
    );
  });
  test("User should be able to remove the items from the cart", async ({
    page,
  }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.removeCartItem(addTOCartData.removedItem);
  });
  test("User should be able to remove all items from the cart", async ({
    page,
  }) => {
    const addtocart = new Add_To_Cart(page);

    await addtocart.removeCartItem(addTOCartData.removedAllItems);
  });
});
