import {test as base} from "@playwright/test";
import { LoginPage } from "../../pages/Login/login.js";
import { login_test_data } from "./login_TestData.js";

export const test = base.extend({
    loginPage: async({page}, use) =>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateToTheSiteAndClickLogin();
        await loginPage.fillInLoginDetail(
            login_test_data.user.email,
            login_test_data.user.password
        );
        await use(loginPage);
    }
})