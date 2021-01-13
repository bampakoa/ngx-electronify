import {
  chain,
  Rule,
  SchematicContext,
  SchematicsException,
  Tree
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function ngAdd(_options: any): Rule {
  return (_: Tree, _context: SchematicContext) => {
    return chain([
      addTarget(),
      installPackageJsonDependencies()
    ]);
  };
}

function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.addTask(new NodePackageInstallTask({packageName: 'ngx-electronify'}));
    return host;
  };
}

function addTarget() {
  return (tree: Tree, _context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const project = workspace.projects[workspace.defaultProject];
    project.architect['desktop'] = {
      'builder': 'ngx-electronify:electron'
    }
    tree.overwrite('angular.json', JSON.stringify(workspace, null, 2));
  };
}

function getWorkspace(host: Tree) {
  const workspaceConfig = host.read('/angular.json');
  if (!workspaceConfig) {
    throw new SchematicsException();
  }

  return JSON.parse(workspaceConfig.toString());
}
