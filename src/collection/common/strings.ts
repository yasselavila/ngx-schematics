/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { strings as stringUtils } from '@angular-devkit/core';

const dashSanitizer: RegExp = /(\-{2,})/gi;

export function toDashes(str: string): string {
  return stringUtils.dasherize(str).replace(dashSanitizer, '-');
}

export function constantStyle(str: string): string {
  return stringUtils.underscore(toDashes(str)).toUpperCase();
}

export function titleStyle(str: string): string {
  return toDashes(str)
    .split('-')
    .map((val: string) => stringUtils.capitalize(val))
    .join(' ');
}

export default {
  ...stringUtils,
  toDashes,
  constantStyle,
  titleStyle
};
