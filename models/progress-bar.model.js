exports.ProgressBarPage = class ProgressBarPage{
    constructor(page) {
        this.page = page;
        this.progressBarUrl = page.goto("/progressbar");
        this.startButton = page.locator("#startButton");
        this.progressBar = page.locator("#progressBar")
        this.stopButton = page.locator("#stopButton");
    }

    async navigateToProgressBarPage() {
        await this.progressBarUrl
    }

    async clickStartButton() {
        await this.startButton.click()
    }

    async getProgressBarPercent() {
        return await this.progressBar.innerText()
    }

    async clickStopButton() {
        await this.stopButton.click()
    }
}
