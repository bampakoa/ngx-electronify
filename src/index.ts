import { BuilderContext, BuilderOutput, createBuilder, Target } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { spawn } from 'child_process';

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

    spawn('..\\ngx-electronify\\node_modules\\.bin\\electron.cmd', ['..\\ngx-electronify\\dist\\renderer.js']);
  })
});
