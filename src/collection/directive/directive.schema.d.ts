/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { BaseSchema } from '../common';

export interface DirectiveSchema extends BaseSchema {
  /**
   * The path for directives
   */
  directivesPath: string;

  /**
   * The module to define directives
   */
  directivesModuleFile: string;

  /**
   * The name of the directive
   */
  directiveName: string;
}
