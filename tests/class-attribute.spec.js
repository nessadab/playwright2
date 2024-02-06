const { test }  = require('@playwright/test');
const { ClassAttributePage } = require('../models/class-attribute.model');

test('Clicking Blue Button', async ({ page }) => {
    // await page.pause()

    // this is a listener
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss()
    })
    const classAttributePage = new ClassAttributePage(page)
    await classAttributePage.navigateToClassAttributePage()
    await classAttributePage.clickBlueButton()

    // await classAttributePage.expectedButtonColorToBe('rgb(0, 0, 255)');
})