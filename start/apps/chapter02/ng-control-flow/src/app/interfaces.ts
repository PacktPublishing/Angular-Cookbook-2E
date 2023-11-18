import { RecipeType } from './enums';

export interface Recipe {
  id: number;
  name: string;
  level: string;
  description: string;
  steps: string[];
  image: string;
  type?: RecipeType;
}
