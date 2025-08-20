import {
  SchematicContext,
  SchematicsException,
  Tree
} from '@angular-devkit/schematics';
import { readWorkspace, writeWorkspace } from '@schematics/angular/utility';
import { Schema } from './schema';

interface NgAddOptions extends Schema {
  project: string;
}

export const ngAdd =
  (options: NgAddOptions) => async (tree: Tree, _context: SchematicContext) => {
    const workspace = await readWorkspace(tree);
    const project = workspace.projects.get(options.project);

    if (!project) {
      throw new SchematicsException(
        'The specified Angular project is not defined in this workspace.'
      );
    }

    if (project.extensions.projectType !== 'application') {
      throw new SchematicsException(
        `ngx-electronify requires an Angular project type of "application" in angular.json.`
      );
    }

    // add a new architect entry in the angular.json file of the current project
    project.targets.add({
      name: 'desktop',
      builder: 'ngx-electronify:electron',
      options: {}
    });

    await writeWorkspace(tree, workspace);
    return tree;
  };
