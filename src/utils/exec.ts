/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

const { existsSync } = require('fs');
const { platform } = require('os');
const { spawn } = require('child_process');

const winExpr: RegExp = /^win/;
const isWin: boolean = winExpr.test(platform());

export function execCli(
  generator: string,
  appData: any,
  options: string[],
  debug?: boolean
): Promise<any> {
  return new Promise<any>(
    (resolve: (value: any) => void, reject: (error: any) => void) => {
      const globalCmd: string = isWin ? 'ng.cmd' : 'ng';
      const localCmd: string = `./node_modules/.bin/${globalCmd}`;
      // TODO: const cmd: string = existsSync(localCmd) ? localCmd : globalCmd;
      const cmd: string = globalCmd;

      let output: string = '';
      let isError: boolean = false;

      const cliOptions: string[] = [
        'g', generator,
        ...options,
        `--appPath=${appData.path}/..`,
        `--appSrcPath=${appData.path}`,
        `--appMainFile=${appData.mainFile}`,
        `--appSelectorPrefix=${appData.prefix}`,
        `--app=${appData.id}`,
        '--collection=@yag/ngx-schematics'
      ];

      if (debug) {
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
