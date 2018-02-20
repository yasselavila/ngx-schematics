/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { existsSync } from 'fs';

import { AppData } from '../ng-cli/data';
import { BaseGenerator, PromptsData } from './generator';

export class GuardGenerator extends BaseGenerator {
  public name: string = 'guard';
  protected options: PromptsData[];

  public async getOptions(appData: AppData, consoleArgs: any): Promise<string[]|null> {
    this.options = [
      { name: 'guardsPath', prompt: 'Enter relative path for route guards', default: 'guards' },
      {
        name: 'guardsModuleFile',
        prompt: 'Enter the file where define and export your route guard',
        default: `guards/index.ts`
      },
      { name: 'guardName', prompt: 'Enter the name of your route guard', default: 'my-route-guard' }
    ];

    return await super.getOptions(appData, consoleArgs);
  }
}
