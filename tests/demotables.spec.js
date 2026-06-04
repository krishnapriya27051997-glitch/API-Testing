import {test} from '@playwright/test';
test ('Demo test'),async ({page}) =>  {
await page.goto('https://demoqa.com/webtables') ;  
const table = await page.locator('<tbody><tr>');

};