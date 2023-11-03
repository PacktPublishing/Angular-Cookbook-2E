import { Component } from '@angular/core';
import { APP_DATA } from '../constants/data';
import { FileIconService } from '../core/services/file-icon.service';
import { IFile, IFolder } from '../interfaces';
import { CommonModule } from '@angular/common';
import { FileComponent } from '../components/file/file.component';
import { FolderComponent } from '../components/folder/folder.component';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss'],
  imports: [CommonModule, FileComponent, FolderComponent, DragDropModule, FontAwesomeModule],
  standalone: true
})
export class FoldersListComponent {
  folders = APP_DATA;
  upArrow = faArrowAltCircleUp;
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

  onFileDrop(event: CdkDragDrop<IFile[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data, event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex
      );
    }
  }
}
