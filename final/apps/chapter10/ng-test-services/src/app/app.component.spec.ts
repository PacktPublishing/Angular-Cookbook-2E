import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

const pageTitle = 'Using spies on an injected service in a unit test';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render title ${pageTitle}`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const title = fixture.debugElement.nativeElement.querySelector('.toolbar__title').textContent;
    expect(title).toEqual(pageTitle);
  });
});
