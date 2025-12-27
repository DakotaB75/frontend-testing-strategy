import { test, expect } from '@playwright/test';

test('Checkout fails with invalid payment', async ({ page }) => {
  await page.goto('/checkout');

  await page.click('#pay-now');

  await expect(page.locator('.error-message'))
    .toContainText('Payment rejected');
});
