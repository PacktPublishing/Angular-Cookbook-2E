import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicationTableComponent } from './multiplication-table.component';

describe('MultiplicationTableComponent', () => {
  let component: MultiplicationTableComponent;
  let fixture: ComponentFixture<MultiplicationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplicationTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiplicationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
