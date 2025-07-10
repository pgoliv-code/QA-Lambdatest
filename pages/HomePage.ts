import { Locator, Page } from '@playwright/test'

export class HomePage {

    readonly page: Page;
    readonly header: Locator;
    readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('header .navbar');
        this.cartButton = page.locator('#entry_217830 a.cart');
    }

}