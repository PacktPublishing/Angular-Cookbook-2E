import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-portfolio-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss'],
})
export class PortfolioFormComponent implements OnInit {
  fb = inject(FormBuilder);
  portfolioForm = this.fb.group({
    name: ['', Validators.required],
    bio: [''],
    projects: this.fb.array<
      FormGroup<{
        label: FormControl<string | null>;
        url: FormControl<string | null>;
      }>
    >([]),
  });

  ngOnInit(): void {
    this.addNewProject();
  }

  addNewProject() {
    this.projectsFormArr.push(
      this.fb.group({
        label: ['', Validators.required],
        url: ['', Validators.required],
      })
    );
  }

  get projectsFormArr() {
    return this.portfolioForm.controls.projects;
  }

  trackByFn(index: number) {
    return index;
  }

  get output() {
    return JSON.stringify(this.portfolioForm.getRawValue(), null, 2);
  }
}
