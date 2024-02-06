const { test } = require('@playwright/test');
const { ScrollbarsPage } = require('../models/scrollbars-model');


test('Clicking the Hidden Button', async ({ page }) => {
    // await page.pause()
    const scrollbarsPage = new ScrollbarsPage(page)
    await scrollbarsPage.navigateToScrollbarsPage()
    await scrollbarsPage.clickHidingButton()
})