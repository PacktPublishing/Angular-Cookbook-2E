import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { VcLogsComponent } from './vc-logs.component';
import { MockRender, MockedComponentFixture } from 'ng-mocks';

describe('VcLogsComponent', () => {
  let component: VcLogsComponent;
  let fixture: MockedComponentFixture<VcLogsComponent, {vName: string}>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VcLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(VcLogsComponent, {
      vName: '0.0.0'
    });
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a log after vName change', () => {
    fixture.detectChanges();
    fixture.componentInstance.vName = "2.2.3";
    fixture.detectChanges();
    expect(component.logs).toHaveLength(2);
  })
});
