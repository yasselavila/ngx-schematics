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

export class PipeGenerator extends BaseGenerator {
  public name: string = 'pipe';
  protected options: PromptsData[];

  public async getOptions(appData: AppData, consoleArgs: any): Promise<string[]|null> {
    const pipesPath: string = (appData.isApp && existsSync(`${appData.path}/shared`))
      ? 'shared/pipes'
      : 'pipes';

    this.options = [
      { name: 'pipesPath', prompt: 'Enter relative path for pipes', default: pipesPath },
      {
        name: 'pipesModuleFile',
        prompt: 'Enter the file where define and export your pipe',
        default: `${pipesPath}/index.ts`
      },
      { name: 'pipeName', prompt: 'Enter the name of your pipe', default: 'my-pipe' }
    ];

    return await super.getOptions(appData, consoleArgs);
  }
}
