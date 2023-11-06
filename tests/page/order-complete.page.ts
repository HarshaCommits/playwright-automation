import { Page } from "@playwright/test";

export class OrderCompletePage {
    private readonly page: Page;
    private readonly selectors = {
        order_complete_msg: ".complete-header",
    };

    constructor(page: Page) {
        this.page = page;
    }

    async orderCompleteMessage() {
        return await this.page.textContent(this.selectors.order_complete_msg);
    }
}
