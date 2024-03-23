import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValueGuesserComponent } from '../components/value-guesser/value-guesser.component';
import { LeaderBoardComponent } from '../components/leader-board/leader-board.component';
import { DiceComponent } from '../components/dice/dice.component';
@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, ValueGuesserComponent, LeaderBoardComponent, DiceComponent]
})
export class GameComponent {
  nameForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  rolling = false;
  
  submitName() {
    // on game name submit
  }
}
