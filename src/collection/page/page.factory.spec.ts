/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

import { expect } from 'chai';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import PageFactory from './page.factory';

describe('Page Schematic', () => {
  it('should define the factory', () => {
    expect(PageFactory).to.be.an('function');
  });
});
