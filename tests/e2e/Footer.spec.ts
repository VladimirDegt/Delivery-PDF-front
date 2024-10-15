import { expect, test } from '@playwright/test';
import { ROUTES } from '../utils/routs';

test.describe('Footer', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.waitForURL(ROUTES.HOME);
    });

    test('WhenFooterLoaded_AllComponentsFooterAreVisible', async ({ page }) => {
        const title = page.getByTestId('titleFooter');
        await expect(title).toBeVisible();
    });
});
