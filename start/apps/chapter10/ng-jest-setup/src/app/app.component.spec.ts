import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

const pageTitle = 'Setting up unit tests in Angular with Jest';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppComponent]
  }));

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
