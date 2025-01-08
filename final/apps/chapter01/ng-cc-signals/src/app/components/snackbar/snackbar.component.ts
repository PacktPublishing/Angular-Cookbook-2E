import { Component, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  @ViewChild('snackbar') snackbar!: TemplateRef<HTMLElement>; 
  vc = inject(ViewContainerRef);
  timer!: ReturnType<typeof setTimeout> | null;

  show() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.vc.clear();
      this.timer = null;
      return;
    }
    this.vc.createEmbeddedView(this.snackbar);
    this.timer = setTimeout(() => {
      this.hide();
    }, 1500)
  }
  
  hide() {
    this.timer = null;
    this.vc.clear();
  }
}
