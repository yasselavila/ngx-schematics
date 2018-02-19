#!/usr/bin/env node
/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { exit } from 'process';

import { AppData, selectApp, Generator, selectGenerator, execNgCli } from '../utils';

async function main(): Promise<void> {
  const appData: AppData = await selectApp();
  const generator: Generator = await selectGenerator();
  const code: number = await execNgCli(appData, generator);

  exit(code);
}

main();
