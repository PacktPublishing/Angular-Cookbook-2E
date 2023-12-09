import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card-back',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card-back.component.html',
  styleUrls: ['./user-card-back.component.scss'],
})
export class UserCardBackComponent {
  @Input() user!: IUser;
}
