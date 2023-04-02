import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionControlRfAsyncComponent } from './version-control-rf-async.component';

describe('VersionControlRfAsyncComponent', () => {
  let component: VersionControlRfAsyncComponent;
  let fixture: ComponentFixture<VersionControlRfAsyncComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionControlRfAsyncComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(VersionControlRfAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
