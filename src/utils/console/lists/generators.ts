/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { Choice, select } from '../prompts';
import { Generator } from '../../generators/generator';
import { PageGenerator } from '../../generators/page';

export function getGeneratorsList(): Choice[]|any[] {
  return [
    { name: 'Page', value: () => new PageGenerator() }
  ];
}

export async function selectGenerator(): Promise<Generator> {
  const selectedGenerator: Choice = await select('What do you need to create?', getGeneratorsList());
  return selectedGenerator.value.call();
}
