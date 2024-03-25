import {
  Tree,
  formatFiles,
  getProjects,
  readJson,
  updateJson,
} from '@nx/devkit';

export default async function update(host: Tree) {
  const projects = getProjects(host);
  const workspaceConfig = readJson(host, 'package.json');
  console.log({ workspaceConfig });
  const workspaceName = workspaceConfig.name;
  projects.forEach((project) => {
    const projectConfigPath = `${project.root}/project.json`;

    // Check if project.json exists for the current project
    if (host.exists(projectConfigPath)) {
      // Update the project.json file
      updateJson(host, projectConfigPath, (json) => {
        // Ensure the project is of type application and has a build target configured
        if (
          json.projectType === 'application' &&
          json.targets?.build?.configurations
        ) {
          const configurations = json.targets.build.configurations;
          const baseHref = `Angular-Cookbook-2E/${project.targets.rename.options.chapter}/${project.targets.rename.options.app}/${workspaceName}`;
          // If there's a production configuration, set the baseHref
          if (configurations.production) {
            configurations.production.baseHref = `/${baseHref}/`;
          } else {
            // If there isn't a production configuration, create one with the baseHref
            configurations.production = { baseHref: `/${baseHref}/` };
          }
        }

        return json;
      });
    }
  });

  await formatFiles(host);
}
