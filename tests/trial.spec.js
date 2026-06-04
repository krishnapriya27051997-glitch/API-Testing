import test from '@playwright/test'

test('Myntra', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');
    const discount_product_price = await page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]').allTextContents();

    const cleaned_prices = discount_product_price.map(price => price.replace(/[^\d]/g, ''));

    console.log(cleaned_prices);

   const minPrice = Math.min(...cleaned_prices.map(Number));

   console.log(minPrice);
   const minpricebrand =  

   console.log(minpricebrand)



});

