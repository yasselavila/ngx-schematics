/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { exit } from 'process';
import { readFileSync, existsSync } from 'fs';

let cliDataCache: any;

export interface AppData {
  id: string;
  isApp: boolean;
  isLib: boolean;
  isValid: boolean;
  path: string|null;
  mainFile: string|null;
  prefix: string;
}

export interface CliData {
  isNxWorkspace: boolean;
  multipleApps: boolean;
  app?: AppData;
  apps?: AppData[];
}

export function getCliData(disableCache?: boolean): CliData {
  if (!disableCache && cliDataCache) {
    return cliDataCache;
  }

  let cliConf: any;

  try {
    const cliConfContent: string = readFileSync('./.angular-cli.json').toString();
    cliConf = JSON.parse(cliConfContent);
  } catch (e) {
    console.error('ERR! Can\'t read data on \'.angular-cli.json\'');
    exit(1);
  }

  const ret: CliData = {
    isNxWorkspace: (existsSync('./apps') && existsSync('./libs')),
    multipleApps: (cliConf.apps && (cliConf.apps.length > 1))
  };

  const libTestExpr: RegExp = /^libs\//;

  if (cliConf.apps) {
    for (let i: number = 0, l: number = cliConf.apps.length; i < l; i++) {
      const currApp: any = cliConf.apps[i];
      const isLib: boolean = (ret.isNxWorkspace && libTestExpr.test(currApp.root));
      const mainFileRef: string = (currApp.main || (isLib ? '../index.ts' : 'main.ts'));
      const mainFile: string = (currApp.root + '/' + mainFileRef);
      const isValid: boolean = existsSync(mainFile);

      const currData: AppData = {
        id: (currApp.name || i),
        isApp: !isLib,
        isLib,
        isValid,
        path: (isValid ? currApp.root : null),
        mainFile: (isValid ? mainFile : null),
        prefix: (currApp.prefix || '')
      };

      if (!ret.multipleApps) {
        ret.app = currData;
      } else {
        (ret.apps = ret.apps || []).push(currData);
      }
    }
  }

  /* Cache */
  cliDataCache = ret;

  return ret;
}

export function getAppData(id: string, isLib?: boolean): AppData|null {
  const cliData: CliData = getCliData();
  const apps: AppData[]|any[] = cliData.apps ? cliData.apps : [ cliData.app ];

  const app: AppData = apps
    .filter((val: any) => val.id === id)
    .filter((val: any) => isLib ? val.isLib : true)
    .shift();

  return app || null;
}

export function getLibData(id: string): AppData|null {
  return getAppData(id, true);
}
