import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionControlTdfComponent } from './version-control-tdf.component';

describe('VersionControlTdfComponent', () => {
  let component: VersionControlTdfComponent;
  let fixture: ComponentFixture<VersionControlTdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionControlTdfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VersionControlTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form', () => {
    component.versionForm.controls['version'].setValue('2.2.4');
    fixture.debugElement.nativeElement.querySelector('button').click();
    expect(component.versionName).toBe('2.2.4');
  });
});
