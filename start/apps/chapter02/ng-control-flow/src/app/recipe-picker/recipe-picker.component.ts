import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeType, SkillLevel } from '../enums';
import { RECIPES } from '../data/recipes';
import { Recipe } from '../interfaces';

@Component({
  selector: 'app-recipe-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-picker.component.html',
  styleUrls: ['./recipe-picker.component.scss'],
})
export class RecipePickerComponent {
  skillLevel = signal<SkillLevel | ''>('');
  options = SkillLevel;
  recipeTypes = RecipeType;
  recipes = signal<Recipe[]>(RECIPES);

  filteredRecipes = computed(() => {
    return this.recipes().filter(
      (recipe) => recipe.level === this.skillLevel()
    );
  });

  skillChanged($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.skillLevel.set(input.value as SkillLevel);
  }
}
