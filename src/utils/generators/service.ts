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

export class ServiceGenerator extends BaseGenerator {
  public name: string = 'service';
  protected options: PromptsData[];

  public async getOptions(appData: AppData, consoleArgs: any): Promise<string[]|null> {
    const svcPath: string = (appData.isApp && existsSync(`${appData.path}/shared`))
      ? 'shared/services'
      : 'services';

    this.options = [
      { name: 'servicesPath', prompt: 'Enter relative path for services', default: svcPath },
      {
        name: 'servicesModuleFile',
        prompt: 'Enter the file where define and export your service',
        default: `${svcPath}/index.ts`
      },
      { name: 'serviceName', prompt: 'Enter the name of your service', default: 'my-service' }
    ];

    return await super.getOptions(appData, consoleArgs);
  }
}
