/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { BaseSchema } from '../common';

export interface GuardSchema extends BaseSchema {
  /**
   * The path for guards
   */
  guardsPath: string;

  /**
   * The module to define guards
   */
  guardsModuleFile: string;

  /**
   * The name of the guard
   */
  guardName: string;
}
