/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { strings } from '@angular-devkit/core';

const dashSanitizer: RegExp = /(\-{2,})/gi;

export function toDashes(str: string): string {
  return strings.dasherize(str).replace(dashSanitizer, '-');
}
