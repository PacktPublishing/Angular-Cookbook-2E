import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAmazingListItemComponent } from './the-amazing-list-item.component';

describe('TheAmazingListItemComponent', () => {
  let component: TheAmazingListItemComponent;
  let fixture: ComponentFixture<TheAmazingListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TheAmazingListItemComponent]
    });
    fixture = TestBed.createComponent(TheAmazingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
