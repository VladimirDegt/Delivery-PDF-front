import { expect, test } from '@playwright/test';
import { ROUTES } from '../utils/routs';

test.describe('Header', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.waitForURL(ROUTES.HOME);
    });

    test('WhenHeaderLoaded_AllComponentsHeaderAreVisible', async ({ page }) => {
        const logo = page.getByTestId('logo');
        await expect(logo).toBeVisible();
        const bntReport = page.getByTestId('bntReport');
        await expect(bntReport).toBeVisible();
        const bntLang = page.getByTestId('bntLang');
        await expect(bntLang).toBeVisible();
        const bntLogin = page.getByTestId('bntLogin');
        await expect(bntLogin).toBeVisible();
    });

    test('WhenClickOnBtnLogo_RedirectToAnotherSite', async ({ page, context }) => {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.getByTestId('logo').click()
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://citynet.kharkiv.ua/');
    });

    test('WhenClickOnBtnReport_RedirectToReportPage', async ({ page }) => {
        const bntReport = page.getByTestId('bntReport');
        await bntReport.click();
        await page.waitForURL(ROUTES.REPORT);
        expect(page.url()).toMatch(ROUTES.REPORT);
    });
});
