import { expect, test } from '@playwright/test';
import { ROUTES } from '../utils/routs';

test.describe('Home page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.waitForURL(ROUTES.HOME);
    });

    test('WhenHomePageLoaded_AllBlocksAreVisible_AndURLIsCorrect', async ({ page }) => {
        expect(page.url()).toMatch(ROUTES.HOME);
        await expect(page).toHaveTitle('DeliveryPDF');
        const header = page.getByTestId('header');
        await expect(header).toBeVisible();
        const main = page.getByTestId('mainHomePage');
        await expect(main).toBeVisible();
        const footer = page.getByTestId('footer');
        await expect(footer).toBeVisible();
    });
});
