import { expect } from "@playwright/test";
import { test } from "../../fixtures/Login/loginFixture.js";
import { Add_To_Cart } from "../../pages/AddToCart/addToCart.js";

test.describe('Add To Cart Tests', () => {
    test ('User Should be Able To Add Products to the Cart Successfullu', async ({loginFixture,}) =>
        {
            await Add_To_Cart.addProductsToCartViaSearching(addTOCartData.item_name)

    })

});