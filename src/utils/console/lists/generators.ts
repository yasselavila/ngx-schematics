/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { Choice, select } from '../prompts';
import { Generator } from '../../generators/generator';
import { PageGenerator } from '../../generators/page';
import { ComponentGenerator } from '../../generators/component';
import { LogicComponentGenerator } from '../../generators/logic-component';
import { DirectiveGenerator } from '../../generators/directive';
import { PipeGenerator } from '../../generators/pipe';
import { GuardGenerator } from '../../generators/guard';
import { ServiceGenerator } from '../../generators/service';
import { ModelGenerator } from '../../generators/model';

export function getGeneratorsList(): Choice[]|any[] {
  return [
    { name: 'Page', value: () => new PageGenerator() },
    { name: 'Component', value: () => new ComponentGenerator() },
    { name: 'Logic-Component', value: () => new LogicComponentGenerator() },
    { name: 'Directive', value: () => new DirectiveGenerator() },
    { name: 'Pipe', value: () => new PipeGenerator() },
    { name: 'Guard', value: () => new GuardGenerator() },
    { name: 'Service', value: () => new ServiceGenerator() },
    { name: 'Model', value: () => new ModelGenerator() }
  ];
}

export async function selectGenerator(): Promise<Generator> {
  const selectedGenerator: Choice = await select('What do you need to create?', getGeneratorsList());
  return selectedGenerator.value.call();
}
