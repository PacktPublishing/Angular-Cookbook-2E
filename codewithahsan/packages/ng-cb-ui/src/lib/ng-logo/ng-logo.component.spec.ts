import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgLogoComponent } from './ng-logo.component';

describe('NgLogoComponent', () => {
  let component: NgLogoComponent;
  let fixture: ComponentFixture<NgLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
