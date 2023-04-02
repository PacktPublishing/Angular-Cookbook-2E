import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionControlRfComponent } from './version-control-rf.component';

describe('VersionControlRfComponent', () => {
  let component: VersionControlRfComponent;
  let fixture: ComponentFixture<VersionControlRfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionControlRfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VersionControlRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
