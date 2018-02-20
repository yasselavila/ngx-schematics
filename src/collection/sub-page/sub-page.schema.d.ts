/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { BaseSchema } from '../common';

export interface SubPageSchema extends BaseSchema {
  /**
   * The path of parent page
   */
  parentPagePath: string;

  /**
   * The module where the parent page is defined
   */
  parentPageModuleFile: string;

  /**
   * The name of the sub-page
   */
  pageName: string;

  /**
   * The title of the sub-page
   */
  pageTitle: string;
}
