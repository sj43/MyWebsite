import { expect, test } from '@playwright/test';

test.describe('portfolio production smoke', () => {
  test('home page renders core portfolio content', async ({ page }) => {
    await page.goto('./');

    await expect(page).toHaveTitle(/Seung Hun Jang/);
    await expect(page.getByRole('heading', { name: 'Seung Hun Jang' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Case Study/ }).first()).toBeVisible();
  });

  test('case study route renders through hash routing', async ({ page }) => {
    await page.goto('./#/project/microsoft');

    await expect(page.getByRole('heading', { name: /Microsoft.*Release Automation/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    await expect(page.getByRole('link', { name: /Back to Projects/i })).toBeVisible();
  });
});