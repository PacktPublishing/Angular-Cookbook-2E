import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipePickerComponent } from './recipe-picker.component';

describe('RecipePickerComponent', () => {
  let component: RecipePickerComponent;
  let fixture: ComponentFixture<RecipePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
