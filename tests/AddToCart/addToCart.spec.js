import { expect } from "@playwright/test";
import { test } from "../../fixtures/Login/loginFixture.js";
import { Add_To_Cart } from "../../pages/AddToCart/addToCart.js";
<<<<<<< HEAD

test.describe('Add To Cart Tests', () => {
    test ('User Should be Able To Add Products to the Cart Successfullu', async ({loginFixture,}) =>
        {
            await Add_To_Cart.addProductsToCartViaSearching(addTOCartData.item_name)

    })

});
=======
import { addTOCartData } from "../../fixtures/AddToCart/addToCart_TestData.js";

test.describe("Add To Cart Tests", () => {
  test("User Should be Able To Add Products to the Cart Successfullu", async ({page
  }) => {
    const addtocart = new Add_To_Cart(page);
    await addtocart.addProductsToCartViaSearching(addTOCartData.item_name);
  });
  test("User Should be Able To Add Products to the Cart from the homepage", async ({page
  }) => {
    const addtocart = new Add_To_Cart(page);
    await addtocart.addProductToCartFromHomePage();
  });
  test("User Should be Able To Add Products to the Cart with Incrementing Quantity", async ({page
  }) => {
    const addtocart = new Add_To_Cart(page);
    await addtocart.addProductToCartWithIncrementingQuantity(addTOCartData.incremental_quantity);
  });
})
>>>>>>> 32ca1e1 (add homepage cart tests and quantity increment coverage)
