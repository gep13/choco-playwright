import { test } from '@playwright/test';

// assertions
import { expectAccessibility } from '@choco-playwright/assertions/expect-accessibility';

export interface TestPageAccessibility {
    userName: string;
    folderName: string;
    fileName?: string;
}

/**
 * Test the accessibility of a page.
 * @function testPageAccessibility
 * @param {TestPageAccessibility} options - The options for the accessibility check.
 * @param {string} options.userName - The username of the specified user.
 * @param {string} options.folderName - The folder name for the accessibility report.
 * @param {string} [options.fileName] - The file name for the accessibility report.
 * @returns {Promise<void>} - A promise that resolves when the test is complete.
 */

export const testPageAccessibility = async ({
    userName = 'Default User',
    folderName,
    fileName
}: TestPageAccessibility): Promise<void> => {
    test(`${userName} - Test page accessibility`, { tag: '@accessibility' }, async ({ page, browserName }) => {
        const postFix = fileName ? `-${fileName}` : '';

        await expectAccessibility({
            page: page,
            browserName: browserName,
            userName: userName,
            folderName: folderName,
            fileName: `screen${postFix}`
        });
    });
};
