import { test, expect } from '@playwright/test';

export const testBaseline = async (): Promise<void> => {
    test('baseline', async ({ page }) => {
        await page.goto('./');
    
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Chocolatey/);
    });
};
