import { Component } from '@angular/core';
import { APP_DATA } from '../constants/data';
import { FileIconService } from '../core/services/file-icon.service';
import { IFolder } from '../interfaces';
import { CommonModule } from '@angular/common';
import { FileComponent } from '../components/file/file.component';
import { FolderComponent } from '../components/folder/folder.component';

@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss'],
  imports: [CommonModule, FileComponent, FolderComponent],
  standalone: true
})
export class FoldersListComponent {
  folders = APP_DATA;
  selectedFolder: IFolder | null = null;
  constructor(private fileIconService: FileIconService) {
    this.folders = this.folders.map((folder) => {
      return {
        ...folder,
        files: folder.files.map((file) => {
          return {
            ...file,
            icon: this.fileIconService.getFileIcon(file.name),
          };
        }),
      };
    });
  }

  toggleFolderSelect(folder: IFolder) {
    if (folder === this.selectedFolder) {
      this.selectedFolder = null;
      return;
    }
    this.selectedFolder = folder;
  }
}
