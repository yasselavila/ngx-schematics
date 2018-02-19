/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { existsSync, readFileSync } from 'fs';

import strings from './strings';

function addDocBlock(options: any): any {
  if (options.appMainFile && existsSync(options.appMainFile)) {
    const mainFileContent = readFileSync(options.appMainFile).toString();

    if ('/**' === mainFileContent.substring(0, 3)) {
      options.docBlock = mainFileContent.substring(0, (mainFileContent.indexOf('*/') + 2)) + `\n\n`;
    }
  }

  options.docBlock = options.docBlock || '';

  return options;
}

function addDescriptors(options: any): any {
  const appTypeDesc: string = options.appIsLib ? 'Lib' : 'App';
  const appIdDesc: string = strings.capitalize(options.appId);

  options.appTestsNs = (options.isNxWorkspace || options.multipleApps)
    ? `[${appTypeDesc}: ${appIdDesc}] `
    : '';

  return options;
}

export function fixOptions(options: any): any {
  addDocBlock(options);
  addDescriptors(options);

  return options;
}
