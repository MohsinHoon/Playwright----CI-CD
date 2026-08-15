import { register_URL } from "../../fixtures/Registration/registration_TestData.js";
import {
  BASE_URL,
  USER_EMAIL,
  USER_PASSWORD,
} from "../../config/enviroment.js";
import { expect } from "@playwright/test";
export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToTheSiteAndClickLogin() {
    await this.page.goto(BASE_URL);
    await this.page.getByRole("link", { name: "Log in" }).click();
  }

  async fillInLoginDetail(email, password) {
    await this.page
      .getByRole("textbox", { name: "Email:" })
      .pressSequentially(email);
    await this.page
      .getByRole("textbox", { name: "Password:" })
      .pressSequentially(password);
    await this.page.getByRole("button", { name: "Log in" }).click();
  }
  // -Verify login with invalid credentials ✅

  async fillInInvalidLoginDetail(email, password) {
    await this.fillInLoginDetail(email, password);
    await expect(
      this.page.getByText(
        "Login was unsuccessful. Please correct the errors and try again. The",
      ),
    ).toBeVisible();
  }
  //-Verify logout functionality ✅

  async nativagateToTheLogoutPage(email, password) {
    await this.fillInLoginDetail(email, password);
    await this.page.getByRole("link", { name: "Log out" }).click();
  }
}
