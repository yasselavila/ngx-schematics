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

export class SubPageGenerator extends BaseGenerator {
  public name: string = 'sub-page';
  protected options: PromptsData[];

  public async getOptions(appData: AppData, consoleArgs: any): Promise<string[]|null> {
    const pagesPath: string = (appData.isApp && existsSync(`${appData.path}/shared`))
      ? 'shared/pages'
      : 'pages';

    this.options = [
      {
        name: 'parentPagePath',
        prompt: 'Enter relative path of the parent page',
        default: `${pagesPath}/my-parent-page`
      },
      {
        name: 'parentPageModuleFile',
        prompt: 'Enter the file where define and export your sub-page',
        default: `${pagesPath}/my-parent-page/index.ts`
      },
      {
        name: 'pageName',
        prompt: 'Enter the name of your sub-page',
        default: 'my-sub-page'
      },
      {
        name: 'pageTitle',
        prompt: 'Enter the title of your sub-page [Name will be used if empty]',
        optional: true
      }
    ];

    return await super.getOptions(appData, consoleArgs);
  }
}
