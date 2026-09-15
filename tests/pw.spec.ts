import {test, expect} from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://rc.abroad.io/');
  await expect(page).toHaveTitle(/Abroad/);
});