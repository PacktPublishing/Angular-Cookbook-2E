import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersionControlComponent } from './version-control.component';
import { FormsModule } from '@angular/forms';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { VersionControlComponentHarness } from './version-control.component.harness';
import { VCLogsComponentHarness } from '../vc-logs/vc-logs.component.harness';
describe('VersionControlComponent', () => {
  let component: VersionControlComponent;
  let fixture: ComponentFixture<VersionControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersionControlComponent, VcLogsComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error on wrong version number input', async () => {
    const vcHarness = await TestbedHarnessEnvironment.harnessForFixture(
      fixture,
      VersionControlComponentHarness
    );
    await vcHarness.setNewAppVersion('abcd');
    await vcHarness.clickSubmit();
    fixture.detectChanges();
    const isErrorShown = await vcHarness.isVersionErrorShown();
    expect(isErrorShown).toBe(true);
  });

  it('should show the new log in the list after adding submitting a new log', async () => {
    const vcHarness = await TestbedHarnessEnvironment.harnessForFixture(
      fixture,
      VersionControlComponentHarness
    );
    const harnessLoader = TestbedHarnessEnvironment.loader(fixture);
    const vcLogsHarness = await harnessLoader.getHarness(
      VCLogsComponentHarness
    );
    const VERSION = '2.3.6';
    await vcHarness.setNewAppVersion(VERSION);
    await vcHarness.clickSubmit();
    fixture.detectChanges();
    const logsLength = await vcLogsHarness.getLogsLength();
    expect(logsLength).toBe(2);
    const firstLogText = await vcLogsHarness.getFirstLogText();
    expect(firstLogText).toBe(`initial version is 0.0.0`);
    const secondLogText = await vcLogsHarness.getSecondLogText();
    expect(secondLogText).toBe(`version changed to 2.3.6`);
  });
});
