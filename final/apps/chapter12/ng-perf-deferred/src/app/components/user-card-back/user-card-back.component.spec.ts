import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCardBackComponent } from './user-card-back.component';

describe('UserCardBackComponent', () => {
  let component: UserCardBackComponent;
  let fixture: ComponentFixture<UserCardBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardBackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
