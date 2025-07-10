//abrir el carrito desde home para visualizar los productos escogidos.


import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { CartPanel } from '../../pages/components/cartPanel';

test.describe('Homepage Cart Panel Flow', () => {

    test('should display cart panel after clicking cart icon', async ({ page }) => {
        
        await page.setViewportSize({ width: 1280, height: 720 });
        
        const homePage = new HomePage(page);
        const cartPanel = new CartPanel(page);

        await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
        await page.waitForTimeout(1000);
        await cartPanel.openCartPanel(homePage);

        await expect(cartPanel.panel).toBeVisible();
    });

});