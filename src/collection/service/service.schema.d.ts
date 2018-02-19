/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { BaseSchema } from '../common';

export interface ServiceSchema extends BaseSchema {
  /**
   * The path for services
   */
  servicesPath: string;

  /**
   * The module to define services
   */
  servicesModuleFile: string;

  /**
   * The name of the service
   */
  serviceName: string;

  /**
   * The model to be used by the service
   */
  modelName?: string;

  /**
   * Is this a service that performs action over HTTP?
   */
  isHttp?: boolean;
}
