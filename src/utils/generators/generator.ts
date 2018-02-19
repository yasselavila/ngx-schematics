/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { exit } from 'process';

import { Choice, prompt, confirm } from '../console/prompts';

export interface PromptsData {
  name: string;
  prompt: string;
  default?: any;
  optional?: boolean;
}

export interface Generator {
  getName: () => string;
  getOptions: (consoleArgs: any) => Promise<string[]|null>;
}

export class BaseGenerator implements Generator {
  protected name: string = 'base';
  protected options: PromptsData[] = [];

  protected pushOption(
    options: string[],
    optionName: string,
    optionChoice: Choice,
    noWrap?: boolean
  ): void {
    options.push(`--${optionName}=${optionChoice.value}`);
  }

  public async getOptions(consoleArgs: any): Promise<string[]|null> {
    const ret: string[] = [];

    for (const option of this.options) {
      const defaultValue: any = ('default' in option) ? option.default : null;
      const optionData: Choice = await prompt(option.prompt, defaultValue);

      if (!option.optional && ('' === optionData.value)) {
        console.error('ERR! A value is required');
        exit(1);
      }

      this.pushOption(ret, option.name, optionData);
    }

    if (!consoleArgs.noConfirm) {
      const isSure: Choice = await confirm('Are you sure?');

      if (!isSure.value) {
        return null;
      }
    }

    return ret;
  }

  public getName(): string {
    return this.name || 'unknown';
  }
}
