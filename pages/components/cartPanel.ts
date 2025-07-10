import { Locator, Page } from '@playwright/test'
import { HomePage } from '../HomePage';

export class CartPanel {

    readonly page: Page;
    readonly panel: Locator;
    readonly emptyMessage: Locator;
    readonly totalTable: Locator;
    readonly editButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.panel = page.locator('[id="cart-total-drawer"]');
        this.emptyMessage = page.locator('[class="m-0 py-5 text-center"]');
        this.totalTable = page.locator('[class="table mb-0"]');
        this.editButton = page.locator('[data-id="217850"]');
        this.checkoutButton = page.locator('[data-id="217851"]');

    }

async openCartPanel(homePage: HomePage): Promise<void> {
  // Wait until the element is attached (in the DOM)
  await homePage.cartButton.waitFor({ state: 'attached' });

  // Wait until it becomes visible
  await homePage.cartButton.waitFor({ state: 'visible' });

  // Click it
  await homePage.cartButton.click();

  // Wait for the panel to appear
  await this.panel.waitFor({ state: 'visible' });
}

}