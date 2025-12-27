import { test, expect } from '@playwright/test';

test('Search returns results', async ({ page }) => {
  await page.goto('/search?q=laptop');

  const results = page.locator('.search-result');

  const count = await results.count();
  expect(count).toBeGreaterThan(0);
});
