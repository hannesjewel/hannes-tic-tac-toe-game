// @ts-check
const { test, expect } = require('@playwright/test');

test('X Wins', async ({ page }) => {
    await page.goto('http://localhost:1234/');
    await page.locator('._game-grid-item').first().click();
    await page.locator('div:nth-child(9)').click();
    await page.locator('div:nth-child(3)').first().click();
    await page.locator('div:nth-child(7)').click();
    await page.locator('div:nth-child(2)').first().click();
    await expect(page.locator('._game-status')).toHaveText(['X Wins'])
});

test('O Wins', async ({ page }) => {
    await page.goto('http://localhost:1234/');
    await page.locator('div:nth-child(5)').click();
    await page.locator('._game-grid-item').first().click();
    await page.locator('div:nth-child(7)').click();
    await page.locator('div:nth-child(3)').first().click();
    await page.locator('div:nth-child(6)').click();
    await page.locator('div:nth-child(2)').first().click();
    await expect(page.locator('._game-status')).toHaveText(['O Wins'])
});

test(`It's a Tie`, async ({ page }) => {
    await page.goto('http://localhost:1234/');
    await page.locator('div:nth-child(5)').click();
    await page.locator('._game-grid-item').first().click();
    await page.locator('div:nth-child(3)').first().click();
    await page.locator('div:nth-child(7)').click();
    await page.locator('div:nth-child(4)').click();
    await page.locator('div:nth-child(6)').click();
    await page.locator('div:nth-child(2)').first().click();
    await page.locator('div:nth-child(8)').click();
    await page.locator('div:nth-child(9)').click();
    await expect(page.locator('._game-status')).toHaveText([`It's a Tie`])
  });