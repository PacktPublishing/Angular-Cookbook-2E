import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameStepperComponent } from './game-stepper.component';

describe('GameStepperComponent', () => {
  let component: GameStepperComponent;
  let fixture: ComponentFixture<GameStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
