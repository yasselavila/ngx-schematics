/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

const inquirer = require('inquirer2');

export interface Choice {
  name: string;
  value: any;
}

export function prompt(message: string, defaultValue?: string): Promise<Choice> {
  return new Promise<Choice>(
    (resolve: (value: any) => void, reject: (error: any) => void) => {
      message += ':';

      inquirer().prompt(
        {
          type: 'input',
          name: 'value',
          default: defaultValue,
          message
        },
        (choice?: Choice) => {
          if (!!choice) {
            resolve(choice);
          } else {
            reject(new Error('Unknown error'));
          }
        }
      );
    }
  );
}

export function select(message: string, choices: Choice[]): Promise<Choice> {
  return new Promise<Choice>(
    (resolve: (value: any) => void, reject: (error: any) => void) => {
      inquirer().prompt(
        {
          type: 'list',
          name: 'value',
          message,
          choices
        },
        (choice?: Choice) => {
          if (!!choice) {
            resolve(choice);
          } else {
            reject(new Error('Unknown option selected'));
          }
        }
      );
    }
  );
}

export function confirm(message: string, defaultValue: 'y'|'n' = 'n'): Promise<Choice> {
  return new Promise<Choice>(
    (resolve: (value: any) => void, reject: (error: any) => void) => {
      message += ':';

      inquirer().prompt(
        {
          type: 'confirm',
          name: 'value',
          default: ('y' === defaultValue),
          message
        },
        (choice?: Choice) => {
          if (!!choice) {
            resolve(choice);
          } else {
            reject(new Error('Unknown error'));
          }
        }
      );
    }
  );
}
