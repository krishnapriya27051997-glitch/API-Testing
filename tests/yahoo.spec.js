import { test } from '@playwright/test';

test('yahoo URL', async ({ page }) => {

    await page.goto('https://in.search.yahoo.com/');

    const yahoo = await page
        .locator('//h3[@class="title"]//ancestor::div[@class="layoutTop"]//following-sibling::div[@class="layoutMiddle"]//descendant::a[text()="Vijay"]')
        .textContent();

    console.log(yahoo);

});