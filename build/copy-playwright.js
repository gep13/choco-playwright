import * as fs from 'fs/promises';

// Set your paths here
const source = 'node_modules/choco-playwright/playwright';
const destination = 'playwright/global';

const copyFolder = async () => {
    // Clean destination
    await fs.rm(destination, { force: true, recursive: true });

    // Copy theme
    await fs.cp(source, destination, { recursive: true });

    console.log('✅ choco-playwright ready!');
};

copyFolder();
