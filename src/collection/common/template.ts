/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { strings } from '@angular-devkit/core';
import {
  template as schematicsTemplate,
  chain as schematicsChain,
  Rule,
  Source,
  SchematicContext,
  Tree,
  branchAndMerge,
  mergeWith
} from '@angular-devkit/schematics';

import * as strTools from './strings';

export function template(options: any): Rule {
  return schematicsTemplate({
    ...strTools,
    ...strings,
    ...options,
    tmpl: ''
  });
}

export function chain(templateSrc: Source, host: Tree, context: SchematicContext): Rule|any {
  return schematicsChain([
    branchAndMerge(schematicsChain([
      mergeWith(templateSrc),
    ])),
  ])(host, context);
}
