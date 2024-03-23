import { BuildExecutorSchema } from './schema';
import executor from './executor';
import { ExecutorContext, Tree } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

const options: BuildExecutorSchema = {
  chapter: 'test-chapter',
  app: 'test-app',
};

const context: ExecutorContext = {
  root: '',
  isVerbose: true,
  cwd: '',
};

describe('Rename Executor', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
  });

  xit('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
