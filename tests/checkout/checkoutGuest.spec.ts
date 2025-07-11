import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { CartPanel } from '../../pages/components/cartPanel';
import { CheckoutCheckout } from '../../pages/CheckoutCheckout';
import { CheckoutConfirm } from '../../pages/CheckoutConfirm';
import { CheckoutSuccess } from '../../pages/CheckoutSuccess';

test('Guest user can complete a purchase', async ({ page }) => {
  const home = new HomePage(page);
  const cart = new CartPanel(page);
  const checkout = new CheckoutCheckout(page);
  const confirmPage = new CheckoutConfirm(page);
  const successPage = new CheckoutSuccess(page);

  await home.goTo();

  const product = page.locator('.product-layout .product-thumb').first();
  const addToCartButton = product.getByRole('button', { name: /add to cart/i });
  await addToCartButton.click();

  await cart.openCartPanel(home);
  await cart.checkoutButton.click();

  await checkout.completeGuestStep();

  await checkout.fillFirstName('Carla');
  await checkout.fillLastName('Lopez');
  await checkout.fillEmail('carla@gmail.com');
  await checkout.fillTelephone('654321987');
  await checkout.fillPassword('Test1234');
  await checkout.fillConfirmPassword('Test1234');

  await checkout.fillCompany('Factoria');
  await checkout.fillAddressOne('Miami');
  await checkout.fillAddressTwo('Piso 60');
  await checkout.fillCity('Barcelona');
  await checkout.fillPostalCode('08001');
  await checkout.selectCountry('Spain');
  await checkout.selectZone('Barcelona');


  await checkout.checkSameAddress();
  await checkout.acceptTerms();
  await checkout.clickBillingContinue();
  

  await expect(
    page.getByRole('button', { name: /continue/i })
  ).toBeVisible();

  await confirmPage.confirmOrder();
  await successPage.verifySuccess();
  
});