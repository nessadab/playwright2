const {test} = require('@playwright/test');
const { ProgressBarPage } = require('../models/progress-bar.model');

test('Stop Progress Bar at 75%', async ({page}) => {
    const progressBarPage = new ProgressBarPage(page)
    await progressBarPage.navigateToProgressBarPage()
    await progressBarPage.clickStartButton()
    
    while (await progressBarPage.getProgressBarPercent() !== "75%") {
            console.log(`current percent is at ${await progressBarPage.getProgressBarPercent()}`);
        } 
    await progressBarPage.clickStopButton()
        
})