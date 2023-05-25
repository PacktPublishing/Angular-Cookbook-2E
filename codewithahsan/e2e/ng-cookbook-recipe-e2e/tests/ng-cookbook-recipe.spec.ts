import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nx/plugin/testing';

describe('ng-cookbook-recipe e2e', () => {
  // Setting up individual workspaces per
  // test can cause e2e runs to take a long time.
  // For this reason, we recommend each suite only
  // consumes 1 workspace. The tests should each operate
  // on a unique project in the workspace, such that they
  // are not dependant on one another.
  beforeAll(() => {
    ensureNxProject(
      '@codewithahsan/ng-cookbook-recipe',
      'dist/packages/ng-cookbook-recipe'
    );
  });

  afterAll(() => {
    // `nx reset` kills the daemon, and performs
    // some work which can help clean up e2e leftovers
    runNxCommandAsync('reset');
  });

  it('should create ng-cookbook-recipe', async () => {
    const projectName = uniq('ng-cookbook-recipe');
    await runNxCommandAsync(
      `generate @codewithahsan/ng-cookbook-recipe:ng-cookbook-recipe ${projectName} --title "CC: Inputs Outputs"`
    );
    await runNxCommandAsync(`rename ${projectName}-e2e`);
    await runNxCommandAsync(`rename ${projectName}`);
    expect(() =>
      checkFilesExist(`apps/${projectName}/src/index.html`)
    ).not.toThrow();
    const project = readJson(`apps/${projectName}/project.json`);
    expect(project.name).toBe(projectName);
  }, 120000);

  describe('--directory', () => {
    it('should create src in the specified directory', async () => {
      const projectName = uniq('ng-cookbook-recipe');
      await runNxCommandAsync(
        `generate @codewithahsan/ng-cookbook-recipe:ng-cookbook-recipe ${projectName} --directory chapter01 --title "test123"`
      );
      await runNxCommandAsync(`run chapter01-${projectName}-e2e:rename`);
      await runNxCommandAsync(`run chapter01-${projectName}:rename`);
      expect(() =>
        checkFilesExist(`apps/chapter01/${projectName}/src/index.html`)
      ).not.toThrow();
      const project = readJson(`apps/chapter01/${projectName}/project.json`);
      expect(project.name).toBe(projectName);
    }, 120000);
  });

  describe('--directory that is noo nested', () => {
    it('should create src in the specified directory', async () => {
      const projectName = uniq('ng-cookbook-recipe');
      await runNxCommandAsync(
        `generate @codewithahsan/ng-cookbook-recipe:ng-cookbook-recipe ${projectName} --directory chapter01/foo/bar --title "test123"`
      );
      await runNxCommandAsync(
        `run chapter01-foo-bar-${projectName}-e2e:rename`
      );
      await runNxCommandAsync(`run chapter01-foo-bar-${projectName}:rename`);
      expect(() =>
        checkFilesExist(`apps/chapter01/foo/bar/${projectName}/src/index.html`)
      ).not.toThrow();
      const project = readJson(
        `apps/chapter01/foo/bar/${projectName}/project.json`
      );
      expect(project.name).toBe(projectName);
    }, 120000);
  });
});
