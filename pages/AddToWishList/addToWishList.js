export class AddToWishListPage {
  constructor(page) {
    this.page = page;
  }

  //-Verify user can add a product to the wishlist

  async addProductToWishList(recipient_Name, recipient_Email, product_Name) {
    await this.page
      .getByRole("link", { name: "Picture of $25 Virtual Gift" })
      .click();
    await this.page
      .getByRole("textbox", {
        name: "Recipient's Name:",
      })
      .fill(recipient_Name);
    await this.page
      .getByRole("textbox", {
        name: "Recipient's Email:",
      })
      .fill(recipient_Email);
    await this.page.getByRole("button", { name: "Add to wishlist" }).click();

    await this.page.locator("#small-searchterms").fill(product_Name);
    await this.page.getByRole("button", { name: "Search" }).click();
    await this.page
      .getByRole("link", { name: "Picture of Smartphone" })
      .click();
    await this.page.getByRole("button", { name: "Add to wishlist" }).click();
  }

  // -Verify product can be removed from the wishlist

  async removeProductFromWishList() {
    await this.page.locator(".ico-wishlist").nth(0).click();
    await this.page.locator('input[name="removefromcart"]').check();
    await this.page.getByRole("button", { name: "Update wishlist" }).click();
  }

  // -Verify wishlist item can be added to the cart

  async addWishListItemsToCart() {
    await this.page.locator(".ico-wishlist").nth(0).click();
    await this.page.locator('input[name="addtocart"]').first().check();
    await this.page.getByRole("button", { name: "Update wishlist" }).click();
  }
}
