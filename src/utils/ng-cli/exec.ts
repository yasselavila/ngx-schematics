/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { existsSync } from 'fs';
import { platform } from 'os';
import { spawn } from 'child_process';
import { exit } from 'process';

import { AppData, CliData, getCliData } from './data';
import { Generator } from '../generators/generator';
import { getConsoleArgs } from '../console/argv';

const winExpr: RegExp = /^win/;
const isWin: boolean = winExpr.test(platform());

function ngCli(
  appData: AppData,
  cliData: CliData,
  generatorName: string,
  genOptions: string[],
  args: any
): Promise<any> {
  return new Promise<any>(
    (resolve: (value: any) => void, reject: (error: any) => void) => {
      const globalCmd: string = isWin ? 'ng.cmd' : 'ng';
      /* TODO:
       * const localCmd: string = `./node_modules/.bin/${globalCmd}`;
       * const cmd: string = existsSync(localCmd) ? localCmd : globalCmd; */
      const cmd: string = globalCmd;

      let output: string = '';
      let isError: boolean = false;

      const cliOptions: string[] = [
        'g',
        generatorName,
        ...genOptions,
        `--isNxWorkspace=${cliData.isNxWorkspace}`,
        `--multipleApps=${cliData.multipleApps}`,
        `--appPath=${appData.path}`,
        `--appMainFile=${appData.mainFile}`,
        `--appSelectorPrefix=${appData.prefix}`,
        `--appIsLib=${appData.isLib}`,
        `--appId=${appData.id}`,
        `--app=${appData.id}`,
        '--collection=@yag/ngx-schematics'
      ];

      if (args.debug) {
        console.log('Options: ', cliOptions);
        console.log('');
      }

      const ngCli: any = spawn(cmd, cliOptions);

      ngCli.stdout.on('data', (data: any) => {
        output += data;
      });

      ngCli.stderr.on('data', (data: any) => {
        output = !isError ? data : (output + data);
        isError = true;
      });

      ngCli.on('close', (code: any) => {
        resolve({
          isError: (isError || (0 !== code)),
          code,
          output: output.toString ? output.toString() : String(output)
        });
      });
    }
  );
}

export async function execNgCli(appData: AppData, generator: Generator): Promise<number> {
  const consoleArgs: any = getConsoleArgs();
  const generatorOptions: string[]|null = await generator.getOptions(appData, consoleArgs);

  if (!generatorOptions) {
    console.log('BYE!');
    exit(0);
  }

  const cliOutput: any = await ngCli(
    appData,
    getCliData(),
    generator.getName(),
    (generatorOptions as any),
    consoleArgs
  );

  if (cliOutput && consoleArgs.debug) {
    console[cliOutput.isError ? 'error' : 'log'](cliOutput.output);
  }

  console.log('@angular/cli: %s!', ((!cliOutput || cliOutput.isError) ? 'ERR' : 'done'));

  return (!cliOutput || cliOutput.error) ? 1 : 0;
}
