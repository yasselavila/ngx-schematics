/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { BaseSchema } from '../common';

export interface ComponentSchema extends BaseSchema {
  /**
   * The path for components
   */
  componentsPath: string;

  /**
   * The module to define components
   */
  componentsModuleFile: string;

  /**
   * The name of the component
   */
  componentName: string;
}
