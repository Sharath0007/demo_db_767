import testData from '../../test-data.json';
const { test, expect } = require('../../../fixtures/walker_fixture.js');
const { heal } = require('../../../fixtures/inline_healer.js');

test('test_de123 @sanity', async ({ page }) => {
  await page.goto(testData.url);
  
  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'username field', 'click', null,
    () => page.locator('[data-test="username"]'));
  await heal(page, 'username field', 'fill', testData.username,
    () => page.locator('[data-test="username"]'));

  await heal(page, 'password field', 'click', null,
    () => page.locator('[data-test="password"]'));
  await heal(page, 'password field', 'fill', testData.password,
    () => page.locator('[data-test="password"]'));

  await heal(page, 'login button', 'click', null,
    () => page.locator('[data-test="login-button"]'));
  await heal(page, 'login button', 'click', null,
    () => page.locator('[data-test="login-button"]'));
});