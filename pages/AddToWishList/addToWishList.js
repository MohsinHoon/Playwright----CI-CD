export class AddToWishListPage {
  constructor(page) {
    this.page = page;
  }

  //-Verify user can add a product to the wishlist

  async addProductToWishList(recipient_Name, recipient_Email) {
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
  }
}
