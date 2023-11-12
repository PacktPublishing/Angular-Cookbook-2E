import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValueGuesserComponent } from '../components/value-guesser/value-guesser.component';
import { LeaderBoardComponent } from '../components/leader-board/leader-board.component';
import { DiceComponent } from '../components/dice/dice.component';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { GameStepperComponent } from '../components/game-stepper/game-stepper.component';
import { IDiceSide } from '../interfaces/dice.interface';
import { LeaderboardService } from '../services/leaderboard.service';
import { IScore } from '../interfaces/score.interface';
import { InstallablePromptService } from '../services/installable-prompt.service';
@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValueGuesserComponent,
    LeaderBoardComponent,
    DiceComponent,
    CdkStepperModule,
    GameStepperComponent
  ],
})
export class GameComponent {
  @ViewChild(CdkStepper) stepper!: CdkStepper;
  @ViewChild(DiceComponent) diceComponent!: DiceComponent;
  @ViewChild(ValueGuesserComponent)
  valueGuesserComponent!: ValueGuesserComponent;
  guessedValue: number | null = null;
  isCorrectGuess: null | boolean = null;
  leaderboardService = inject(LeaderboardService);
  promptService = inject(InstallablePromptService);
  scores: IScore[] = this.leaderboardService.getScores();
  rolling = false;
  nameForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  submitName() {
    this.stepper.next();
  }

  rollTheDice(guessedValue: number) {
    this.isCorrectGuess = null;
    this.guessedValue = guessedValue;
    this.diceComponent.rollDice();
  }
  showResult(diceSide: IDiceSide) {
    this.isCorrectGuess = this.guessedValue === diceSide.value;
    const userName = this.nameForm.controls.name.value as string;
    if (!this.isCorrectGuess) {
      return;
    }
    if (this.promptService.installPromptEvent) {
      this.promptService.isPromptBannerShown.set(true);
    }
    this.scores = this.leaderboardService.setScores({
      name: userName,
      score: 50,
    });
  }

}
