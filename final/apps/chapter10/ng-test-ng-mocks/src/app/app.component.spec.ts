import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { MockComponent } from 'ng-mocks';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockComponent(VersionControlComponent)],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar__title')?.textContent).toContain(
      'Mocking child components and directives using ng-mocks package'
    );
  });
});
