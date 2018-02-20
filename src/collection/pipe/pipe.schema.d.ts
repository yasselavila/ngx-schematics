/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { BaseSchema } from '../common';

export interface PipeSchema extends BaseSchema {
  /**
   * The path for pipes
   */
  pipesPath: string;

  /**
   * The module to define pipes
   */
  pipesModuleFile: string;

  /**
   * The name of the pipe
   */
  pipeName: string;
}
