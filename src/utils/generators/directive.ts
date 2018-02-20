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

export class DirectiveGenerator extends BaseGenerator {
  public name: string = 'directive';
  protected options: PromptsData[];

  public async getOptions(appData: AppData, consoleArgs: any): Promise<string[]|null> {
    const directivesPath: string = (appData.isApp && existsSync(`${appData.path}/shared`))
      ? 'shared/directives'
      : 'directives';

    this.options = [
      { name: 'directivesPath', prompt: 'Enter relative path for directives', default: directivesPath },
      {
        name: 'directivesModuleFile',
        prompt: 'Enter the file where define and export your directive',
        default: `${directivesPath}/index.ts`
      },
      { name: 'directiveName', prompt: 'Enter the name of your directive', default: 'my-directive' }
    ];

    return await super.getOptions(appData, consoleArgs);
  }
}
