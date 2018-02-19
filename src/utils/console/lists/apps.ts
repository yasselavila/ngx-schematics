/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import * as Separator from 'inquirer2/lib/objects/separator';

import { Choice, select } from '../prompts';
import { getCliData, CliData, AppData } from '../../ng-cli/data';

function section(name: string, apps: AppData[]): Choice[] {
  const ret: Choice[] = [];
  ret.push(new Separator(`${name}: `));

  for (const app of apps) {
    ret.push({ value: app, name: `  ${app.id}` });
  }

  return ret;
}

export function getAppsList(cliData: CliData): Choice[] {
  const cliApps: AppData[] = cliData.apps as AppData[];
  let ret: Choice[] = [];

  const apps: AppData[] = cliApps.filter((app: AppData) => app.isApp);
  const libs: AppData[] = cliApps.filter((app: AppData) => app.isLib);

  if (apps.length) {
    ret = ret.concat(section('Applications', apps));
  }

  if (libs.length) {
    ret = ret.concat(section('Libraries', libs));
  }

  return ret;
}

export async function selectApp(): Promise<AppData> {
  const cliData: CliData = getCliData();

  let app: AppData;

  if (cliData.app) {
    app = cliData.app;
  } else {
    const selectedApp: Choice = await select('Please, select an Application or Library', getAppsList(cliData));
    app = selectedApp.value;
  }

  console.log('WARN! Using %s "%s"...', (app.isLib ? 'library' : 'application'), app.id);

  return app;
}
