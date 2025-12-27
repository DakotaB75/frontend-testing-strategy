import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('User can login with valid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.fill('#email', 'user@test.com');
    await page.fill('#password', 'Password123!');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('text=Welcome')).toBeVisible();
  });
});
