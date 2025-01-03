import { Component, Input } from '@angular/core';
import { IFile } from '../../interfaces';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.scss'],
    imports: [CommonModule, FontAwesomeModule]
})
export class FileComponent {
  @Input() file!: IFile;
}
