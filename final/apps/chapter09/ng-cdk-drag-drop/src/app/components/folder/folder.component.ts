import { Component, Input } from '@angular/core';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { IFolder } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
  imports: [CommonModule, FontAwesomeModule],
  standalone: true
})
export class FolderComponent {
  @Input() folder!: IFolder;
  folderIcon = faFolder;
}
