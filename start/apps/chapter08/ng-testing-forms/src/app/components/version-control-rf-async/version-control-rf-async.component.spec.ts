import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionControlRfAsyncComponent } from './version-control-rf-async.component';

describe('VersionControlRfAsyncComponent', () => {
  let component: VersionControlRfAsyncComponent;
  let fixture: ComponentFixture<VersionControlRfAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionControlRfAsyncComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VersionControlRfAsyncComponent);
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
