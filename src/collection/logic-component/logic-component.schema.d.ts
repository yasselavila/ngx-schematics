/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { BaseSchema } from '../common';

export interface LogicComponentSchema extends BaseSchema {
  /**
   * The path for logic-components
   */
  logicComponentsPath: string;

  /**
   * The module to define logic-components
   */
  logicComponentsModuleFile: string;

  /**
   * The name of the logicComponent
   */
  logicComponentName: string;
}
