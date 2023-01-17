import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleOutlineButtonComponent } from './purple-outline-button.component';

describe('PurpleOutlineButtonComponent', () => {
  let component: PurpleOutlineButtonComponent;
  let fixture: ComponentFixture<PurpleOutlineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurpleOutlineButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurpleOutlineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
