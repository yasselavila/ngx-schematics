/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

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

import strings from './strings';

export function template(options: any): Rule {
  return schematicsTemplate({
    ...strings,
    ...options,
    /* IMPORTANT! Do not remove it */
    tmpl: ''
  });
}

export function chain(templatesSrc: Source, host: Tree, context: SchematicContext): Rule|any {
  return schematicsChain([
    branchAndMerge(schematicsChain([
      mergeWith(templatesSrc),
    ])),
  ])(host, context);
}
