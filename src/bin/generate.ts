#!/usr/bin/env node
/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { exit, argv } from 'process';

import { execCli } from '../utils/exec';
import { Choice, select, prompt, confirm } from '../utils/console/prompts';
import { getAppsList } from '../utils/console/lists/apps';
import { getGeneratorsList } from '../utils/console/lists/generators';
import { Generator } from '../utils/generators/generator';

async function main(): Promise<void> {
  console.log('Welcome!');
  console.log('');

  const appsList: Choice[] = getAppsList();
  let appData: any;

  if (2 === appsList.length) {
    appData = (appsList.pop() as any);
    console.log('WARN! App/Lib "%s" was selected by default', appData.value.id);
  } else {
    appData = await select('Please, select an Application or Library', getAppsList());
  }

  const gen: Choice = await select('What do you need to create?', getGeneratorsList());

  const debug: boolean = (-1 !== argv.indexOf('--debug'));
  const noConfirm: boolean = (-1 !== argv.indexOf('--noConfirm'));

  const generator: Generator = gen.value.call();
  const generatorOptions: string[]|null = await generator.getOptions(noConfirm, debug);

  if (!generator) {
    console.log('BYE!');
    exit(0);
  }

  const cliOutput: any = await execCli(
    generator.getName(),
    appData.value,
    (generatorOptions as any),
    debug
  );

  if (!cliOutput) {
    console.error('ERR! Unknown error. Sorry!');
  } else {
    if (-1 !== argv.indexOf('--debug')) {
      console[cliOutput.isError ? 'error' : 'log'](cliOutput.output);
    }

    console.log(cliOutput.isError ? 'ERR!' : 'Done!');
  }
}

main();
