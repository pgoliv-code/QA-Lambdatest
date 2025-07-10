import { Locator, Page } from '@playwright/test'

export class BillingAdress {

    readonly page: Page;
    readonly companyInput: Locator
    readonly addressOneInput: Locator
    readonly addressTwoInput: Locator
    readonly cityInput: Locator
    readonly postalCodeInput: Locator
    readonly countryInput: Locator
    readonly zoneInput: Locator
    readonly saveButton: Locator
    

    constructor(page: Page) {
        this.page = page;
        this.companyInput = page.locator('[id="input-payment-company"]');
        this.addressOneInput = page.locator('[id="input-payment-adress-1"]');
        this.addressTwoInput = page.locator('[id="input-payment-adress-2"]');
        this.cityInput = page.locator('[id="input-payment-city"]');
        this.postalCodeInput = page.locator('[id="input-payment-postalcode"]');
        this.countryInput = page.locator('[id="input-payment-country"]');
        this.zoneInput = page.locator('[id="input-payment-zone"]');
        this.saveButton = page.locator('[id="button-save"]');
    }

    async fillCompany(company: string): Promise<void> {
        await this.companyInput.waitFor({ state: 'visible'})
        await this.companyInput.fill(company)
    }

    async fillAdressOne(adressOne: string): Promise<void> {
        await this.addressOneInput.waitFor({ state: 'visible'})
        await this.addressOneInput.fill(adressOne)
    }

    async fillAdressTwo(adressTwo: string): Promise<void> {
        await this.addressTwoInput.waitFor({ state: 'visible'})
        await this.addressTwoInput.fill(adressTwo)
    }

    async fillCity(city: string): Promise<void> {
        await this.cityInput.waitFor({ state: 'visible'})
        await this.cityInput.fill(city)
    }

    async fillPostalCode(postalCode: string): Promise<void> {
        await this.postalCodeInput.waitFor({ state: 'visible'})
        await this.postalCodeInput.fill(postalCode)
    }
    async fillCountry(country: string): Promise<void> {
        await this.countryInput.waitFor({ state: 'visible'})
        await this.countryInput.fill(country)
    }

    async fillZone(zone: string): Promise<void> {
        await this.zoneInput.waitFor({ state: 'visible'})
        await this.zoneInput.fill(zone)
    }

    async clickContinueButton(): Promise<void> {
        await this.saveButton.click()
    }



}