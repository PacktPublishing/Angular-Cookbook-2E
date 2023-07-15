import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { FormsModule } from '@angular/forms';
import { VcLogsComponent } from './components/vc-logs/vc-logs.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, VersionControlComponent, VcLogsComponent],
      imports: [RouterTestingModule, FormsModule],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar__title')?.textContent).toContain(
      'Writing even easier tests with Angular CDK component harnesses'
    );
  });
});
