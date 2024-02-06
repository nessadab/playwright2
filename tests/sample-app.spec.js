import { test } from '@playwright/test';
const { sampleAppPage } = require('../models/sample-app.model');


test.describe.parallel('suite', () => {

  test('log in success', async ({ page }) => {
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.fillUsernameField('Percival Picklepants');
    await SampleAppPage.fillPasswordField('pwd');
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.expectedLoginTextToBe('Welcome, Percival Picklepants!');
  });

  test('wrong password test', async ({ page }) => {
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.fillUsernameField('Minerva Plus');
    await SampleAppPage.fillPasswordField('WrongPass');
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.expectedLoginTextToBe('Invalid username/password');
  });

  test('no username test', async ({ page }) => {
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.fillUsernameField('');
    await SampleAppPage.fillPasswordField('pwd');
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.expectedLoginTextToBe('Invalid username/password');
  });

  test('log out test', async ({ page }) => {
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.fillUsernameField('Percival Picklepants');
    await SampleAppPage.fillPasswordField('pwd');
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.expectedLoginTextToBe('Welcome, Percival Picklepants!');
    await SampleAppPage.clickLogoutButton();
    await SampleAppPage.expectedLoginTextToBe('User logged out.');
  });
  
})