import { expect, test } from '@playwright/test';
import { ROUTES } from '../utils/routs';

test.describe('Report page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.waitForURL(ROUTES.HOME);
    });

    test('WhenReportPageLoaded_AllBlocksAreVisible_AndURLIsCorrect', async ({ page }) => {
        const bntReport = page.getByTestId('bntReport');
        await bntReport.click();
        await page.waitForURL(ROUTES.REPORT);
        expect(page.url()).toMatch(ROUTES.REPORT);

        await expect(page).toHaveTitle('SendMyPDF');
        const header = page.getByTestId('header');
        await expect(header).toBeVisible();
        const main = page.getByTestId('mainReportPage');
        await expect(main).toBeVisible();
        const footer = page.getByTestId('footer');
        await expect(footer).toBeVisible();
    });
});
