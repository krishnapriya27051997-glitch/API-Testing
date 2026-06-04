import {test} from '@playwright/test';
test ('https://demoqa.com/webtables'),async ({page}) => {    
const table = await page.locator('<tbody><tr>');
console.log(table)
console.log (await table.count())
}
