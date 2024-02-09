const { test } = require('@playwright/test');
const { sampleAppPage } = require('../models/sample-app.model');
import * as dotenv from 'dotenv';
dotenv.config();
let username = process.env.USERNAME
let password = process.env.PASSWORD

test.describe.parallel('suite', () => {

  test('log in success', async ({ page }) => {
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.fillUsernameField(username);
    await SampleAppPage.fillPasswordField(password);
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.expectedLoginTextToBe(`Welcome, ${username}!`);
  });

  test('wrong password test', async ({ page }) => {
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.fillUsernameField(username);
    await SampleAppPage.fillPasswordField('4343asdas');
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.expectedLoginTextToBe('Invalid username/password');
  });

  test('no username test', async ({ page }) => {
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.fillUsernameField('');
    await SampleAppPage.fillPasswordField(password);
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.expectedLoginTextToBe('Invalid username/password');
  });

  test('log out test', async ({ page }) => {
    const SampleAppPage = new sampleAppPage(page);
    await SampleAppPage.navigateToSampleApp();
    await SampleAppPage.fillUsernameField(username);
    await SampleAppPage.fillPasswordField(password);
    await SampleAppPage.clickLoginButton();
    await SampleAppPage.expectedLoginTextToBe(`Welcome, ${username}!`);
    await SampleAppPage.clickLogoutButton();
    await SampleAppPage.expectedLoginTextToBe('User logged out.');
  });
  
})