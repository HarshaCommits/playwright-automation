import {test, expect} from "@playwright/test";
import {LoginPage} from "../page/login.page";
import {HomePage} from "../page/home.page";
import {BasePage} from "../page/base.page";
//@ts-ignore
import testdata from "../data/purchase-flow.json";

test.describe("Purchase flow", () => {
    test.beforeEach(async ({page}) => {
        const basePage = new BasePage(page);
        await basePage.goto();
    });

    test("Login and verify cart count", async ({page}) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        await loginPage.login(testdata.login_details);
        await homePage.addItemsToCart(testdata.products);
        const itemsCount = await homePage.getCartItemsCount();

        expect(itemsCount).toBe("1");
    });

    test("Add to cart and verify order completion", async ({
                                                               page,
                                                           }) => {
        const loginPage = new LoginPage(page);
        const thanksMessage = "Thank you for your order!"

        const msg = await loginPage
            .login(testdata.login_details)
            .then((callback) => callback.addItemsToCart(testdata.products))
            .then((callback) => callback.gotoCartPage())
            .then((callback) => callback.checkoutCart())
            .then((callback) =>
                callback.fillCheckoutInformation(testdata.checkout_info)
            )
            .then((callback) => callback.finishCheckout())
            .then((callback) => callback.orderCompleteMessage())
            .catch((err) => console.error(err));
        expect(msg).toBe(thanksMessage);
    });

    test.afterEach(async ({page}) => {
        const basePage = new BasePage(page);
        await basePage.tearDown();
    });
});
