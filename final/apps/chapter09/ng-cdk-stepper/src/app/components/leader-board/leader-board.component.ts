import { Component, Input } from '@angular/core';
import { IScore } from '../../interfaces/score.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LeaderBoardComponent {
  @Input() scores: IScore[] = [];
}
