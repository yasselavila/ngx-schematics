/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import * as Separator from 'inquirer2/lib/objects/separator';

import { Choice, prompt, confirm } from '../prompts';
import { getCliAppsData } from '../../ngcli-data';

export function getAppsList(): Choice[] {
  const apps: any = getCliAppsData();
  const ret: Choice[] = [];

  for (const type in apps) {
    const section: string = type[0].toUpperCase() + type.substring(1) + ':';
    ret.push(new Separator(section));

    for (const app of apps[type]) {
      const name: string = '  ' + app.id + (app.description ? (' (' + app.description + ')') : '');
      ret.push({ name, value: app });
    }
  }

  return ret;
}
