import { register_URL } from "../../fixtures/Registration/registration_TestData.js";
import { BASE_URL, USER_EMAIL,USER_PASSWORD } from "../../config/enviroment.js";

export class LoginPage {
    constructor(page) {
        this.page = page; 
    }

    async navigateToTheSiteAndClickLogin (){
        await this.page.goto(BASE_URL);
        await this.page.getByRole('link', { name: 'Log in' }).click();
    }
    async fillInLoginDetail (email,password){
        await this.page.getByRole('textbox', { name: 'Email:' }).pressSequentially(USER_EMAIL);
        await this.page.getByRole('textbox', { name: 'Password:' }).pressSequentially(USER_PASSWORD);
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }

}