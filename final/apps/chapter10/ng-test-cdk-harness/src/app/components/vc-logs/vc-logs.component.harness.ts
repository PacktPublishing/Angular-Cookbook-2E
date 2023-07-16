import { ComponentHarness } from '@angular/cdk/testing';
export class VCLogsComponentHarness extends ComponentHarness {
  static hostSelector = 'app-vc-logs';
  protected getLogsList = this.locatorForAll('.logs__item');

  async getLogsLength() {
    const logsElements = await this.getLogsList();
    return logsElements.length;
  }

  protected async getLogTextAt(index: number) {
    const logsElements = await this.getLogsList();
    return (await logsElements[index].text()).trim();
  }

  async getFirstLogText() {
    return await this.getLogTextAt(0);
  }

  async getSecondLogText() {
    return await this.getLogTextAt(1);
  }
}
