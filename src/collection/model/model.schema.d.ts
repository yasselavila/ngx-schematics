/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { BaseSchema } from '../common';

export interface ModelSchema extends BaseSchema {
  /**
   * The path for models
   */
  modelsPath: string;

  /**
   * The file to export models
   */
  modelsExportsFile: string;

  /**
   * The name of the model
   */
  modelName: string;
}
