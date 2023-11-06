import { Page } from "@playwright/test";
import { OrderCompletePage } from "./order-complete.page";

export class CheckoutOverviewPage {
    private readonly page: Page;
    private readonly selectors = {
        finish: "#finish",
    };

    constructor(page: Page) {
        this.page = page;
    }

    async finishCheckout() {
        await this.page.click(this.selectors.finish);
        return new OrderCompletePage(this.page);
    }
}
