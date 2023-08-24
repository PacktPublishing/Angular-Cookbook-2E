import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketComponent } from './bucket.component';

describe('BucketComponent', () => {
  let component: BucketComponent;
  let fixture: ComponentFixture<BucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
