import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper'; 

@Component({
  selector: 'app-game-stepper',
  standalone: true,
  imports: [CommonModule, CdkStepperModule],
  templateUrl: './game-stepper.component.html',
  styleUrls: ['./game-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: GameStepperComponent }]
})
export class GameStepperComponent extends CdkStepper {}
