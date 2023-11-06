import { Page } from "@playwright/test";
import { CheckoutInfo } from "../entity/purchase";
import { CheckoutOverviewPage } from "./checkout-overview.page";

export class CheckoutInfoPage {
    private readonly page: Page;
    private readonly selectors = {
        first_name: "#first-name",
        last_name: "#last-name",
        zip_code: "#postal-code",
        continue: "#continue",
    };

    constructor(page: Page) {
        this.page = page;
    }

    async fillCheckoutInformation(userDetails: CheckoutInfo) {
        await this.page.fill(this.selectors.first_name, userDetails.first_name);
        await this.page.fill(this.selectors.last_name, userDetails.last_name);
        await this.page.fill(this.selectors.zip_code, userDetails.zip_code);
        await this.page.click(this.selectors.continue);
        return new CheckoutOverviewPage(this.page);
    }
}
