const { expect } = require('@playwright/test');
exports.textInputPage = class textInputPage {
    constructor(page) {
      this.page = page;
      this.url = page.goto('/textinput');
      this.inputBox = page.locator('#newButtonName');
      this.updatingButton = page.locator('#updatingButton')
    }

    async navigateToTextInputPage() {
      await this.url
    }

    async fillInputBox(text) {
      await this.inputBox.fill(text)
    }

    async clickUpdatingButton() {
        await this.updatingButton.click()
    }

    async expectedButtonTextToBe(text) {
      await expect(this.updatingButton).toHaveText(text)
    }
}
