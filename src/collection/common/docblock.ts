/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { existsSync, readFileSync } from 'fs';
console.log('asdsad d');
export function addDocBlock(options: any): any {
  console.log('asdsad');

  console.log(options);
  if (options.appMainFile) {
    console.log(options.appMainFile);
  }

  return options;
}
