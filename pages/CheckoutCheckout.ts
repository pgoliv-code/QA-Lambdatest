import { Page, Locator, expect } from '@playwright/test';

export class CheckoutCheckout {
  readonly page: Page;
  readonly guestRadio: Locator;
  readonly continueButton: Locator;
  readonly companyInput: Locator;
  readonly addressOneInput: Locator;
  readonly addressTwoInput: Locator;
  readonly cityInput: Locator;
  readonly postalCodeInput: Locator;
  readonly countrySelect: Locator;
  readonly zoneSelect: Locator;
  readonly billingContinueButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly sameAddressCheckbox: Locator;
  readonly agreeCheckbox: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.sameAddressCheckbox = page.locator('label[for="input-shipping-address-same"]');
    this.guestRadio = page.getByRole('radio', { name: /guest/i });
    this.continueButton = page.getByRole('button', { name: /continue/i });
    this.companyInput = page.locator('[id="input-payment-company"]');
    this.addressOneInput = page.locator('[id="input-payment-adress-1"]');
    this.addressTwoInput = page.locator('[id="input-payment-adress-2"]');
    this.cityInput = page.locator('[id="input-payment-city"]');
    this.postalCodeInput = page.locator('[id="input-payment-postalcode"]');
    this.countrySelect = page.locator('[id="input-payment-country"]');
    this.zoneSelect = page.locator('[id="input-payment-zone"]');
    this.billingContinueButton = page.locator('#button-payment-address'); 
    this.firstNameInput = page.locator('[id="input-payment-firstname"]');
    this.lastNameInput = page.locator('[id="input-payment-lastname"]');
    this.emailInput = page.locator('[id="input-payment-email"]');
    this.telephoneInput = page.locator('[id="input-payment-telephone"]');
    this.passwordInput = page.locator('[id="input-payment-password"]');
    this.confirmPasswordInput = page.locator('[id="input-payment-confirm"]');
    this.agreeCheckbox = page.locator('label[for="input-agree"]');
  }

  async goTo(): Promise<void> {
    await this.page.goto('checkout/checkout');
  }

  async selectGuestCheckout(): Promise<void> {
    await this.guestRadio.waitFor({ state: 'visible' });
    await this.guestRadio.check();
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.waitFor({ state: 'visible' });
    await this.continueButton.click();
  }

  async completeGuestStep(): Promise<void> {
    await this.selectGuestCheckout();
    await this.clickContinue();
    await expect(this.page.locator('#collapse-payment-address')).toBeVisible();
  }

  async fillCompany(company: string): Promise<void> {
    await this.companyInput.waitFor({ state: 'visible' });
    await this.companyInput.fill(company);
  }

  async fillAddressOne(addressOne: string): Promise<void> {
    await this.addressOneInput.waitFor({ state: 'visible' });
    await this.addressOneInput.fill(addressOne);
  }

  async fillAddressTwo(addressTwo: string): Promise<void> {
    await this.addressTwoInput.waitFor({ state: 'visible' });
    await this.addressTwoInput.fill(addressTwo);
  }

  async fillCity(city: string): Promise<void> {
    await this.cityInput.waitFor({ state: 'visible' });
    await this.cityInput.fill(city);
  }

  async fillPostalCode(postalCode: string): Promise<void> {
    await this.postalCodeInput.waitFor({ state: 'visible' });
    await this.postalCodeInput.fill(postalCode);
  }

  async selectCountry(country: string): Promise<void> {
    await this.countrySelect.waitFor({ state: 'visible' });
    await this.countrySelect.selectOption({ label: country });
  }

  async selectZone(zone: string): Promise<void> {
    await this.zoneSelect.waitFor({ state: 'visible' });
    await this.zoneSelect.selectOption({ label: zone });
  }

  async clickBillingContinue(): Promise<void> {
    await this.billingContinueButton.waitFor({ state: 'visible' });
    await this.billingContinueButton.click();
  }

  async fillFirstName(firstName: string): Promise<void> {
  await this.firstNameInput.waitFor({ state: 'visible' });
  await this.firstNameInput.fill(firstName);
}

async fillLastName(lastName: string): Promise<void> {
  await this.lastNameInput.waitFor({ state: 'visible' });
  await this.lastNameInput.fill(lastName);
}

async fillEmail(email: string): Promise<void> {
  await this.emailInput.waitFor({ state: 'visible' });
  await this.emailInput.fill(email);
}

async fillTelephone(telephone: string): Promise<void> {
  await this.telephoneInput.waitFor({ state: 'visible' });
  await this.telephoneInput.fill(telephone);
}

async fillPassword(password: string): Promise<void> {
  await this.passwordInput.waitFor({ state: 'visible' });
  await this.passwordInput.fill(password);
}

async fillConfirmPassword(confirmPassword: string): Promise<void> {
  await this.confirmPasswordInput.waitFor({ state: 'visible' });
  await this.confirmPasswordInput.fill(confirmPassword);
}
async checkSameAddress(): Promise<void> {
  await this.sameAddressCheckbox.waitFor({ state: 'visible' });
  await this.sameAddressCheckbox.click();
}

async acceptTerms(): Promise<void> {
  await this.agreeCheckbox.waitFor({ state: 'visible' });
  await this.agreeCheckbox.click();
}
}