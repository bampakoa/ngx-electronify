import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
  Target
} from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { spawn } from 'child_process';
import * as path from 'path';
interface Options {
  configuration?: string;
}
type BuilderOptions = Options & JsonObject;

export default createBuilder(
  (options: BuilderOptions, context: BuilderContext) => {
    return new Promise<BuilderOutput>(async () => {
      // create a target for building the app
      const buildTarget: Target = {
        target: 'serve',
        project: (context.target as Target).project,
        configuration: options.configuration ? options.configuration : ''
      };

      // start building the app
      const build = await context.scheduleTarget(buildTarget);
      await build.result;

      const electronPath = path.resolve('node_modules/.bin/electron');
      const appPath = path.resolve(
        'node_modules/ngx-electronify/dist/renderer.js'
      );

      spawn(electronPath, [appPath], { shell: true });
    });
  }
);
