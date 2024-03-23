import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { IDice, IDiceSide } from '../../interfaces/dice.interface';
import { RollTransitions } from '../../constants/roll-transitions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DiceComponent {
  dice: IDice = {
    sides: [],
  };
  selectedSide: IDiceSide;
  rollTransition: RollTransitions;
  @Output() diceRolling = new EventEmitter<boolean>();
  @Output() diceRolled = new EventEmitter<IDiceSide>();
  constructor(private el: ElementRef) {
    this.dice.sides = new Array(6).fill(0).map((_, index) => {
      const value = index + 1;
      return {
        value,
        dots: new Array(index + 1).fill(0),
      };
    });
    this.rollTransition = RollTransitions.TransitionOne;
    this.selectedSide = this.dice.sides[0];
  }

  rollDice() {
    this.diceRolling.emit(true);
    const index = Math.floor(Math.random() * 6);
    this.selectedSide = this.dice.sides[index];
    this.toggleRollTransition();
    setTimeout(() => {
      // we emit after the dice's animation has finished
      this.diceRolled.emit(this.selectedSide);
      this.diceRolling.emit(false);
    }, 2000);
  }

  toggleRollTransition() {
    if (this.rollTransition === RollTransitions.TransitionOne) {
      this.rollTransition = RollTransitions.TransitionTwo;
    } else {
      this.rollTransition = RollTransitions.TransitionOne;
    }
  }
}
