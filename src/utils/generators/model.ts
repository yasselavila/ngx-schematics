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

export class ModelGenerator extends BaseGenerator {
  public name: string = 'model';
  protected options: PromptsData[];

  public async getOptions(appData: AppData, consoleArgs: any): Promise<string[]|null> {
    const modelsPath: string = (appData.isApp && existsSync(`${appData.path}/shared`))
      ? 'shared/models'
      : 'models';

    this.options = [
      { name: 'modelsPath', prompt: 'Enter relative path for models', default: modelsPath },
      {
        name: 'modelsExportsFile',
        prompt: 'Enter the file where define and export your model',
        default: `${modelsPath}/index.ts`
      },
      { name: 'modelName', prompt: 'Enter the name of your model', default: 'my-model' }
    ];

    return await super.getOptions(appData, consoleArgs);
  }
}
