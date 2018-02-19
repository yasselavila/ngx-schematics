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

export class ComponentGenerator extends BaseGenerator {
  public name: string = 'component';
  protected options: PromptsData[];

  public async getOptions(appData: AppData, consoleArgs: any): Promise<string[]|null> {
    const cmpPath: string = (appData.isApp && existsSync(`${appData.path}/shared/components`))
      ? 'shared/components'
      : 'components';

    this.options = [
      { name: 'componentsPath', prompt: 'Enter relative path for components', default: cmpPath },
      {
        name: 'componentsModuleFile',
        prompt: 'Enter the file where define and export your component',
        default: `${cmpPath}/index.ts`
      },
      { name: 'componentName', prompt: 'Enter the name of your component', default: 'my-component' }
    ];

    return await super.getOptions(appData, consoleArgs);
  }
}
