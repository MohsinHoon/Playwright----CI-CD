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

  // -Verify search with an empty search field

  async searchWithEmptySearchFields() {
    await this.page.getByRole("button", { name: "Search" }).first().click();
  }

  //-Verify user can navigate to a product details page

  async navigateToProductDetailsPage() {
    await this.page
      .getByRole("link", { name: "Picture of 14.1-inch Laptop" })
      .click();
  }

  // -Verify product details are displayed correctly

  async verifyProductDetaisAreDisplayedCorrectly(title, price, description) {
    await this.page
      .getByRole("link", { name: "Picture of 14.1-inch Laptop" })
      .click();
    await expect(this.page.getByText("Unique Asian-influenced")).toHaveText(
      title,
    );
    await expect(
      this.page.locator("#product-details-form").getByText("1590.00"),
    ).toHaveText(price);
    await expect(
      this.page.getByText("Optimize your mobility with a"),
    ).toHaveText(description);
  }

  // -Verify user can add multiple different products to the cart

  async addMultipleProductsToCart(recipient_Name, recipient_Email) {
    const products = {
      productONE: {
        link: this.page.getByRole("link", {
          name: "Picture of $25 Virtual Gift",
        }),
        recipientName: this.page.getByRole("textbox", {
          name: "Recipient's Name:",
        }),
        recipientEmail: this.page.getByRole("textbox", {
          name: "Recipient's Email:",
        }),
      },

      productTWO: this.page.getByRole("link", {
        name: "14.1-inch Laptop",
        exact: true,
      }),
      productTHREE: this.page.getByRole("link", {
        name: "Build your own cheap computer",
        exact: true,
      }),
    };
    await products.productONE.link.click();

    await products.productONE.recipientName.fill(recipient_Name);
    await products.productONE.recipientEmail.fill(recipient_Email);
    await this.page.locator("#add-to-cart-button-2").click();
    await this.page.goBack();

    await products.productTWO.click();
    await this.page.locator("#add-to-cart-button-31").click();
    await this.page.goBack();

    await products.productTHREE.click();
    await this.page.locator("#add-to-cart-button-72").click();
  }

  // -Verify product quantity can be decreased in the cart

  async decreaseProductQuantityInCart(decresed_Quantity) {
    await this.page.locator(".cart-label").first().click();
    await this.page
      .getByRole("row", { name: "Picture of 14.1-inch Laptop" })
      .getByRole("checkbox")
      .check();
    await this.page.locator("input.qty-input").nth(0).fill(decresed_Quantity);
  }
}
