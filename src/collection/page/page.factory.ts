/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Source, apply, move, url } from '@angular-devkit/schematics';

import { template, chain } from '../common/template';
import { completeOptions } from '../common/options';
import { PageSchema as PageOptions } from './page.schema';

export default function(options: PageOptions): Rule {
  completeOptions(options);

  return (host: Tree, context: SchematicContext) => {
    const templatesSrc: Source = apply(
      url('./files'),
      [
        template(options),
        move(options.appSrcPath)
      ]
    );

    return chain(templatesSrc, host, context);
  };
}
