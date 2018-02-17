/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { readFileSync, existsSync } from 'fs';

export function getCliAppsData(): any {
  const cliConfContent: string = readFileSync('./.angular-cli.json').toString();
  const cliConf: any = JSON.parse(cliConfContent);

  const appTestExpr: RegExp = /^apps\//;

  const ret: any = {
    apps: [],
    libs: []
  };

  if (!!cliConf.apps) {
    for (let i: number = 0, l: number = cliConf.apps.length; i < l; i++) {
      const curr: any = cliConf.apps[i];
      const isApp: boolean = appTestExpr.test(curr.root);
      const mainFileRef: string = (curr.main || (isApp ? 'main.ts' : '../index.ts'));
      const mainFile: string = (curr.root + '/' + mainFileRef);
      const isValid: boolean = existsSync(mainFile);

      ret[isApp ? 'apps' : 'libs'].push({
        id: (curr.name || 'default'),
        isApp,
        isLib: !isApp,
        isValid,
        path: (isValid ? curr.root : null),
        mainFile: (isValid ? mainFile : null),
        prefix: (curr.prefix || '')
      });
    }
  }

  return ret;
}

export function getAppData(id: string, noValidate?: boolean, isLib?: boolean): any|null {
  const app: any = getCliAppsData()[!!isLib ? 'libs' : 'apps']
    .filter((val: any) => val.id === id)
    .shift();

  return (app && (app.isValid || noValidate)) ? app : null;
}

export function getLibData(id: string, noValidate?: boolean): any|null {
  return getAppData(id, noValidate, true);
}
