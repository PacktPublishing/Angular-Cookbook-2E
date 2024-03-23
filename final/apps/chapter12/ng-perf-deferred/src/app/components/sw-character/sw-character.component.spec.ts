import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwCharacterComponent } from './sw-character.component';

describe('SwCharacterComponent', () => {
  let component: SwCharacterComponent;
  let fixture: ComponentFixture<SwCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
