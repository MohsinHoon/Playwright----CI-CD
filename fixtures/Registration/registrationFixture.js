import { test as base } from "@playwright/test";
import { RegistrationPage } from "../../pages/Registration/registration.js";
import { registration_test_data } from "../../fixtures/Registration/registration_TestData.js";
export const test = base.extend({
  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.navigatingToTheSiteAndClickRegister(
      registration_test_data.url.register_URL
    );

    await use(registrationPage);
  },
});

export { expect } from "@playwright/test";