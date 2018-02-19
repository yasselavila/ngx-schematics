/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Source, apply, move, url } from '@angular-devkit/schematics';

import { template, chain, fixOptions } from '../common';
import { ComponentSchema as ComponentOptions } from './component.schema';

export default function(options: ComponentOptions): Rule {
  fixOptions(options);

  return (host: Tree, context: SchematicContext) => {
    const templatesSrc: Source = apply(
      url('./files'),
      [
        template(options),
        move(`${options.appPath}/${options.componentsPath}`)
      ]
    );

    return chain(templatesSrc, host, context);
  };
}
