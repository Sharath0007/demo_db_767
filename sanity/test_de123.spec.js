import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('test_de123 @sanity', async ({ page }) => {
  await page.goto(testData.url);
  
  await page.waitForLoadState('domcontentloaded');

  await expect(page.locator('[data-test="username"]')).toBeEnabled();
  await page.locator('[data-test="username"]').click();
  await expect(page.locator('[data-test="username"]')).toBeEditable();
  await page.locator('[data-test="username"]').fill(testData.username);

  await expect(page.locator('[data-test="password"]')).toBeEnabled();
  await page.locator('[data-test="password"]').click();
  await expect(page.locator('[data-test="password"]')).toBeEditable();
  await page.locator('[data-test="password"]').fill(testData.password);

  await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
  await page.locator('[data-test="login-button"]').click();
});
