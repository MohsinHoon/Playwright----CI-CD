export class CheckOutPage {
  constructor(page) {
    this.page = page;
  }

  //   -Verify user can proceed to checkout from the cart
  // complete workflow

  async proceedToCheckOutPage(
    companyName,
    countryName,
    cityName,
    address1,
    address2,
    postalCode,
    phoneNumber,
    faxNumber,
  ) {
    await this.page
      .getByRole("link", { name: "Picture of 14.1-inch Laptop" })
      .click();
    await this.page.locator("#add-to-cart-button-31").click();
    await this.page.locator(".cart-label").first().click();
    await this.page
      .getByRole("row", { name: "Picture of 14.1-inch Laptop" })
      .getByRole("checkbox")
      .check();
    await this.page.locator("#termsofservice").check();
    await this.page.getByRole("button", { name: "Checkout" }).click();
    // await this.page
    //   .getByLabel("Select a shipping address")
    //   .selectOption("New Address");
    // await this.page
    //   .getByRole("textbox", { name: "Company:" })
    //   .fill(companyName);
    // await this.page.getByLabel("Country:").selectOption(countryName);
    // await this.page.getByRole("textbox", { name: "City:" }).fill(cityName);
    // await this.page.getByRole("textbox", { name: "Address 1:" }).fill(address1);
    // await this.page.getByRole("textbox", { name: "Address 2:" }).fill(address2);
    // await this.page
    //   .getByRole("textbox", { name: "Zip / postal code:" })
    //   .fill(postalCode);
    // await this.page
    //   .getByRole("textbox", { name: "Phone number:" })
    //   .fill(phoneNumber);
    // await this.page
    //   .getByRole("textbox", { name: "Fax number:" })
    //   .fill(faxNumber);
    await this.page.getByRole("button", { name: "Continue" }).click();
    await this.page.getByRole("button", { name: "Continue" }).first().click();
  }
}
