import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import generator from './generator';
import { NgCookbookRecipeGeneratorSchema } from './schema';

describe('ng-cookbook-recipe generator', () => {
  let appTree: Tree;
  const options: NgCookbookRecipeGeneratorSchema = {
    name: 'test',
    title: 'My App',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
