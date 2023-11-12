import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [CommonModule, UsersComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css'
})
export class AppShellComponent {

}
