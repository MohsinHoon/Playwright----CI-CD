export class Add_To_Cart {
  constructor(page) {
    this.page = page;
  }

  // adding product to the cart after using search
  async addProductsToCartViaSearching(itemsearch) {
    await this.page.locator("#small-searchterms").pressSequentially(itemsearch);
    await this.page.getByRole("button", { name: "Search" }).click();
    await this.page.getByRole("button", { name: "Add to cart" }).click();
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

}