/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { existsSync, readFileSync } from 'fs';

export function addDocBlock(options: any): any {
  if (options.appMainFile && existsSync(options.appMainFile)) {
    const mainFileContent = readFileSync(options.appMainFile).toString();

    if ('/**' === mainFileContent.substring(0, 3)) {
      /* tslint:disable-next-line */
      options.docBlock = mainFileContent.substring(0, (mainFileContent.indexOf('*/') + 2)) + `\n\n`;
    }
  }

  options.docBlock = options.docBlock || '';

  return options;
}

export function completeOptions(options: any): any {
  addDocBlock(options);
}
