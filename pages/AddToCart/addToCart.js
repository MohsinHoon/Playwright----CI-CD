import { expect } from "@playwright/test";
export class Add_To_Cart {
  constructor(page) {
    this.page = page;
  }

  // adding product to the cart after using search
  async addProductsToCartViaSearching(itemsearch) {
    await this.page.locator("#small-searchterms").pressSequentially(itemsearch);
    await this.page.getByRole("button", { name: "Search" }).click();
    await this.page
      .getByRole("button", { name: "Add to cart" })
      .first()
      .click();
  }

  async addProductToCartFromHomePage() {
    await this.page
      .getByRole("link", { name: "Picture of 14.1-inch Laptop" })
      .click();
    await this.page.locator("#add-to-cart-button-31").click();
  }
  async addProductToCartWithIncrementingQuantity(quantity) {
    await this.page
      .getByRole("link", { name: "Picture of 14.1-inch Laptop" })
      .click();
    await this.page.getByRole("textbox", { name: "Qty:" }).fill(quantity);
    await this.page.locator("#add-to-cart-button-31").click();
  }

  // Verify search with an invalid product name

  async searchWithInvalidProductName(invalidProductName) {
    await this.page
      .locator("#small-searchterms")
      .pressSequentially(invalidProductName);
    await this.page.getByRole("button", { name: "Search" }).first().click();
    await expect(this.page.locator(".search-results")).toBeVisible();
  }

  //-Verify user can navigate to a product details page

  async navigateToProductDetailsPage() {
    await this.page
      .getByRole("link", { name: "Picture of 14.1-inch Laptop" })
      .click();
  }
}
