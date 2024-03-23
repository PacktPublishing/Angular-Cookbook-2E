import { Component, Input } from '@angular/core';
import { IFile } from '../../interfaces/file-folder.interfaces';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  imports: [CommonModule, FontAwesomeModule],
  standalone: true
})
export class FileComponent {
  @Input() file!: IFile;
}
