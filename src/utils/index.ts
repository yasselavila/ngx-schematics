/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

/* NG-CLI */
export { AppData, CliData, getCliData, getAppData, getLibData } from './ng-cli/data';
export { execNgCli } from './ng-cli/exec';

/* Generators */
export { PromptsData, Generator, BaseGenerator } from './generators/generator';
export { PageGenerator } from './generators/page';

/* Console basic utils */
export { getConsoleArgs } from './console/argv';
export { Choice, prompt, select, confirm } from './console/prompts';

/* Lists op options */
export { getAppsList, selectApp } from './console/lists/apps';
export { getGeneratorsList, selectGenerator } from './console/lists/generators';
