import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstallablePromptService } from './services/installable-prompt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule],
})
export class AppComponent {
  promptService = inject(InstallablePromptService);
}
