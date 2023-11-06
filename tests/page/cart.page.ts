import { Page } from "@playwright/test";
import { CheckoutInfoPage } from "./checkout-info.page";

export class CartPage {
    private readonly page: Page;
    private readonly selectors = {
        check_out: "#checkout",
    };

    constructor(page: Page) {
        this.page = page;
    }

    async checkoutCart() {
        await this.page.click(this.selectors.check_out);
        return new CheckoutInfoPage(this.page);
    }
}
