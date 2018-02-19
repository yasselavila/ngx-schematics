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

export class LogicComponentGenerator extends BaseGenerator {
  public name: string = 'logic-component';
  protected options: PromptsData[];

  public async getOptions(appData: AppData, consoleArgs: any): Promise<string[]|null> {
    const cmpPath: string = (appData.isApp && existsSync(`${appData.path}/shared`))
      ? 'shared/logic-components'
      : 'logic-components';

    this.options = [
      { name: 'logicComponentsPath', prompt: 'Enter relative path for logic-components', default: cmpPath },
      {
        name: 'logicComponentsModuleFile',
        prompt: 'Enter the file where define and export your logic-component',
        default: `${cmpPath}/index.ts`
      },
      { name: 'logicComponentName', prompt: 'Enter the name of your logic-component', default: 'my-logic-component' }
    ];

    return await super.getOptions(appData, consoleArgs);
  }
}
