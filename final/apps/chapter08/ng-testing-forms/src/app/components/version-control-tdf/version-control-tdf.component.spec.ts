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

  it('should submit the form with valid version', () => {
    component.versionForm.controls['version'].setValue('2.2.4');
    fixture.debugElement.nativeElement.querySelector('button').click();
    expect(component.versionName).toBe('2.2.4');
  });

  it('should show required error', () => {
    component.versionForm.controls['version'].setValue('2.2.4');
    fixture.detectChanges();
    component.versionForm.controls['version'].setValue('');
    fixture.detectChanges();
    fixture.debugElement.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(component.versionName).toBe('0.0.0');
    expect(
      fixture.debugElement.nativeElement
        .querySelector('.error')
        .textContent.trim()
    ).toBe('Version number is required');
  });

  it('should show pattern error', () => {
    component.versionForm.controls['version'].setValue('2.2.4');
    fixture.detectChanges();
    component.versionForm.controls['version'].setValue('invalid input');
    fixture.detectChanges();
    fixture.debugElement.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(component.versionName).toBe('0.0.0');
    expect(
      fixture.debugElement.nativeElement
        .querySelector('.error')
        .textContent.trim()
    ).toBe('Version number does not match the pattern (x.x.x)');
  });
});
