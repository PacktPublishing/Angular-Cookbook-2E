import { UnitTestRunner, E2eTestRunner } from "@nx/angular/generators";

export interface NgCookbookRecipeGeneratorSchema {
  name: string;
  title: string;
  tags?: string;
  directory?: string;
  e2eTestRunner?: E2eTestRunner;
  unitTestRunner?: UnitTestRunner;
  standalone?: boolean;
  addTailwind?: boolean;
  routing?: boolean;
  skipDefaultProject?: boolean;
  style?: 'scss' | 'css' | 'sass' | 'less';
  prefix?: string;
  skipTests?: boolean;
}
