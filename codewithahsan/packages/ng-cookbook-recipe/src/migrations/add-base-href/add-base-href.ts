import { Tree, formatFiles, getProjects, updateJson } from '@nx/devkit';

export default async function update(host: Tree) {
  const projects = getProjects(host);
  projects.forEach((projectName) => {
    const projectConfigPath = `${projectName.name}/project.json`;

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

          // If there's a production configuration, set the baseHref
          if (configurations.production) {
            configurations.production.baseHref = `/${projectName}/`;
          } else {
            // If there isn't a production configuration, create one with the baseHref
            configurations.production = { baseHref: `/${projectName}/` };
          }
        }

        return json;
      });
    }
  });

  await formatFiles(host);
}
