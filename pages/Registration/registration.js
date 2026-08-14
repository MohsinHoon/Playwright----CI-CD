import { test, expect } from "@playwright/test";
export class RegistrationPage {
  constructor(page) {
    this.page = page;
  }
  async navigatingToTheSiteAndClickRegister() {
    await this.page.goto("https://demowebshop.tricentis.com/");
    await this.page.getByRole("link", { name: "Register" }).click();
  }
  //Verify successful user registration ✅

  async fillInRegistrationDetails(
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  ) {
    //gender selection
    await this.page
      .locator('input[name="Gender"][type="radio"]')
      .nth(0)
      .check();
    //first_name
    await this.page
      .getByRole("textbox", { name: "First name:" })
      .fill(first_name);
    //last_name
    await this.page
      .getByRole("textbox", { name: "Last name:" })
      .pressSequentially(last_name);
    //email
    await this.page
      .getByRole("textbox", { name: "Email:" })
      .pressSequentially(email);
    //password
    await this.page
      .getByRole("textbox", { name: "Password:", exact: true })
      .pressSequentially(password);
    //confirm_password
    await this.page
      .getByRole("textbox", { name: "Confirm password:" })
      .pressSequentially(confirm_password);
    //register_button_clicked
    await this.page.getByRole("button", { name: "Register" }).click();
  }

  // -Verify registration with an already registered email ✅

  async registerWithExistingEmail(
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  ) {
    await this.fillInRegistrationDetails(
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    );
    await expect(
      this.page.getByText("The specified email already"),
    ).toBeVisible();
  }
}
