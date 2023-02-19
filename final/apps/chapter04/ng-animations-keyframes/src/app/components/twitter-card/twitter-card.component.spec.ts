import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterCardComponent } from './twitter-card.component';

describe('TwitterCardComponent', () => {
  let component: TwitterCardComponent;
  let fixture: ComponentFixture<TwitterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwitterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
