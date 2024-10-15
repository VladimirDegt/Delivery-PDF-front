import { expect, test } from '@playwright/test';
import { ROUTES } from '../utils/routs';

test.describe('Main section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.waitForURL(ROUTES.HOME);
    });

    test('WhenHomePageLoaded_AllComponentsMainAreVisible', async ({ page }) => {
        const formChooseEmailTo = page.getByTestId('formChooseEmailTo');
        await expect(formChooseEmailTo).toBeVisible();
        const blockChooseActs = page.getByTestId('blockChooseActs');
        await expect(blockChooseActs).toBeVisible();
        const dragAndDrop = page.getByTestId('dragAndDrop');
        await expect(dragAndDrop).toBeVisible();
    });
});
