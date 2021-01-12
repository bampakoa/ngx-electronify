import { BuilderContext, BuilderOutput, createBuilder, Target } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { spawn } from 'child_process';
import * as path from 'path';

export default createBuilder((_: JsonObject, context: BuilderContext) => {
  return new Promise<BuilderOutput>(async () => {

    // create a target for building the app
    const buildTarget = {
      target: 'serve',
      project: (context.target as Target).project,
    };

    // start building the app
    const build = await context.scheduleTarget(buildTarget);
    await build.result;

    const electronPath = path.resolve('node_modules/.bin/electron');
    const appPath = path.resolve('node_modules/ngx-electronify/dist/renderer.js');
    spawn(electronPath, [appPath], { shell: true });
  })
});
