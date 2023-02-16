import { expect, Expect, test } from '@playwright/test';

test('check cart', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Collection' }).click();
  await expect(page).toHaveURL('http://localhost:3000/collection');

  await page.getByRole('link', { name: 'NFT-3' }).click();
  await expect(page).toHaveURL('http://localhost:3000/collection/3');

  await page.getByRole('button', { name: '+' }).click({ clickCount: 2 });
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await page.getByRole('link', { name: 'Cart' }).click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  await expect(
    page.locator('[data-test-id="cart-product-3"] >> p:nth-child(4)'),
  ).toHaveText('Quantity: 3');

  await page.getByRole('button', { name: 'Remove Product' }).click();
  await expect(
    page.locator('[data-test-id="cart-product-3"] >> p:nth-child(4)'),
  ).not.toBeVisible();
});
