import {
  test,
  expect,
} from "../../fixtures/Registration/registrationFixture.js";
import { registration_test_data } from "../../fixtures/Registration/registration_TestData.js";

test.describe("Registration Tests", () => {
  test("User Should be Able to register the site Successfully", async ({
    registrationPage,
  }) => {
    await registrationPage.fillInRegistrationDetails(
      registration_test_data.url.first_name,
      registration_test_data.url.last_name,
      registration_test_data.url.email,
      registration_test_data.url.password,
      registration_test_data.url.confirm_password,
    );
  });
  
  //-Verify registration with an already registered email ✅

  test("User is trying to register with already registred email ", async ({
    registrationPage,
  }) => {
    await registrationPage.fillInRegistrationDetails(
      registration_test_data.url.first_name,
      registration_test_data.url.last_name,
      registration_test_data.url.email,
      registration_test_data.url.password,
      registration_test_data.url.confirm_password,
    );
  });
});
