import { test, expect } from '@playwright/test';

test('filters and clicks the exact Forgotten Password link', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

  const accountLinks = page.locator('a.list-group-item');
  await expect(accountLinks).toHaveCount(13);

  const forgottenPasswordLink = accountLinks.filter({ hasText: 'Forgotten Password' });
  await expect(forgottenPasswordLink).toHaveCount(1);

  await forgottenPasswordLink.click();
  await expect(page).toHaveURL(/#forgotten-password/);
});
