/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { argv } from 'process';

const argExpr: RegExp = /^\-\-([a-z][a-z0-9]*)(=(.*))?$/i;
let argsCache: any;

export function getConsoleArgs(disableCache?: boolean): any {
  if (!disableCache && argsCache) {
    return argsCache;
  }

  const args: string[] = argv.slice(2);
  const ret: any = {};

  for (let i: number = 0, l: number = args.length; i < l; i++) {
    const matches: any = args[i].match(argExpr);

    if (matches) {
      ret[ matches[1] ] = matches[3] || true;
    }
  }

  /* Cache */
  argsCache = ret;

  return ret;
}
