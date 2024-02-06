import { test } from '@playwright/test';
const { textInputPage } = require('../models/text-input.model');
const myButton ="The Best Button"

test('test updating button', async ({ page }) => {
  const TextInputPage = new textInputPage(page);
  await TextInputPage.navigateToTextInputPage();
  await TextInputPage.fillInputBox(myButton);
  await TextInputPage.clickUpdatingButton();
  await TextInputPage.expectedButtonTextToBe(myButton);
});


