import { Page } from "@playwright/test";
import { LoginDetails } from "../entity/purchase";
import { HomePage } from "./home.page";

export class LoginPage {
    private readonly page: Page;
    private readonly selectors = {
        user_name: "#user-name",
        password: "#password",
        login_button: "#login-button",
    };
    constructor(page: Page) {
        this.page = page;
    }
    async login(credentials: LoginDetails) {
        await this.page.fill(this.selectors.user_name, credentials.user_name);
        await this.page.fill(this.selectors.password, credentials.password);
        await this.page.click(this.selectors.login_button);
        return new HomePage(this.page);
    }
}
