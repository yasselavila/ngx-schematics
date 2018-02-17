/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { Choice } from '../prompts';
import { PageGenerator } from '../../generators/page';

export function getGeneratorsList(): Choice[]|any[] {
  return [
    { name: 'Page', value: () => new PageGenerator() }
  ];
}
