/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { BaseSchema } from '../common';

export interface PageSchema extends BaseSchema {
  /**
   * The path for pages
   */
  pagesPath: string;

  /**
   * The module to define pages
   */
  pagesModuleFile: string;

  /**
   * Create a module for the page?
   */
  noModule: string;

  /**
   * The name of the Page
   */
  pageName: string;

  /**
   * The title of the Page
   */
  pageTitle: string;
}
