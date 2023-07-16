import { ComponentHarness } from '@angular/cdk/testing';
export class VersionControlComponentHarness extends ComponentHarness {
  static hostSelector = 'app-version-control';
  protected getSubmitButton = this.locatorFor('button[type=submit]');
  protected getAppVersionInput = this.locatorFor(`#versionNumber`);
  protected getVersionErrorEl = this.locatorFor('small.error');

  async clickSubmit() {
    const submitBtn = await this.getSubmitButton();
    return await submitBtn.click();
  }
  async setNewAppVersion(version: string) {
    const versionInput = await this.getAppVersionInput();
    return await versionInput.sendKeys(version);
  }
  async isVersionErrorShown() {
    const expected = 'Version number does not match the pattern (x.x.x)';
    const versionErrorEl = await this.getVersionErrorEl();
    const versionErrorText = await versionErrorEl.text();
    const isErrorShown = versionErrorText.trim() === expected;
    if (!isErrorShown) {
      console.log({
        actual: versionErrorText.trim(),
        expected,
      });
    }
    return isErrorShown;
  }
}
