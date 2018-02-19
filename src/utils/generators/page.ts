/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { BaseGenerator, PromptsData } from './generator';

export class PageGenerator extends BaseGenerator {
  public name: string = 'page';

  protected options: PromptsData[] = [
    { name: 'pageName', prompt: 'Enter the name of your page', default: 'my-page' },
    { name: 'pageTitle', prompt: 'Enter the title of your page [Name will be used if empty]', optional: true }
  ];
}
