import { workspaces } from '@angular-devkit/core';
import {
  SchematicContext,
  SchematicsException,
  Tree,
} from '@angular-devkit/schematics';
import { Schema } from './schema';
import { getWorkspace } from './utility';

interface NgAddOptions extends Schema {
  project: string;
}

export const ngAdd = (options: NgAddOptions) => async (
  tree: Tree,
  _context: SchematicContext,
) => {
  const { host, workspace } = await getWorkspace(tree);
  const project = workspace.projects.get(options.project);

  if (!project) {
    throw new SchematicsException(
      'The specified Angular project is not defined in this workspace.',
    );
  }

  if (project.extensions.projectType !== 'application') {
    throw new SchematicsException(
      `ngx-electronify requires an Angular project type of "application" in angular.json.`,
    );
  }

  project.targets.add({
    name: 'desktop',
    builder: 'ngx-electronify:electron',
    options: {},
  });

  await workspaces.writeWorkspace(workspace, host);
  return tree;
};
