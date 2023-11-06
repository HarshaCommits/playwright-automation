import { Page } from "@playwright/test";
import { CartPage } from "./cart.page";

export class HomePage {
    private readonly page: Page;
    private readonly selectors = {
        cart_icon: "id=shopping_cart_container",
        product: "data-test=PRODUCT",
        cart_count: ".shopping_cart_badge",
    };

    constructor(page: Page) {
        this.page = page;
    }

    async isCartDisplayed() {
        return this.page.isVisible(this.selectors.cart_icon);
    }

    async addItemsToCart(products: string[]) {
        products.forEach((prod) =>
            this.page.click(this.selectors.product.replace("PRODUCT", prod))
        );
        this.page.waitForTimeout(10000);
        return this;
    }

    async getCartItemsCount() {
        return await this.page.textContent(this.selectors.cart_count);
    }

    async gotoCartPage() {
        await this.page.click(this.selectors.cart_icon);
        return new CartPage(this.page);
    }
}
