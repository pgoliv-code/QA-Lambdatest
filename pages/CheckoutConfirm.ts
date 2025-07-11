import { Page, Locator } from '@playwright/test';

export class CheckoutConfirm {
  readonly page: Page;
  readonly confirmOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.confirmOrderButton = page.getByRole('button', { name: /confirm order/i });
  }

  async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.waitFor({ state: 'visible' });
    await this.confirmOrderButton.click();
  }
}
