import { Page, expect } from '@playwright/test';

export class CheckoutSuccess {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifySuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/.*checkout\/success/);
    await expect(this.page.getByRole('heading', { name: /your order has been placed/i })).toBeVisible();
  }
}
