import { VersionControlComponent } from './version-control.component';
import { MockBuilder, MockRender, MockedComponentFixture, ngMocks } from 'ng-mocks';
import { AppModule } from '../../app.module';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';


describe('VersionControlComponent', () => {
  let component: VersionControlComponent;
  let fixture: MockedComponentFixture<VersionControlComponent>;

  beforeEach(() => {
    return MockBuilder(
      VersionControlComponent,
      AppModule
    );
  });
  beforeEach(() => {
    fixture = MockRender(VersionControlComponent);
    component = fixture.point.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set vName input value in VCLogsComponent', () => {
    const vcLogsComponent = ngMocks.find<VcLogsComponent>(
      'app-vc-logs'
    ).componentInstance;
    component.versionName = '2.2.2';
    fixture.detectChanges();
    expect(vcLogsComponent.vName).toBe('2.2.2');
  });
});
