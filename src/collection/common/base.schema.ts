/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

export interface BaseSchema {
  /**
   * The path of the App
   */
  appPath: string;

  /**
   * The src dir of the App
   */
  appSrcPath: string;

  /**
   * The main file of the App
   */
  appMainFile: string;

  /**
   * The selectors prefix of the App
   */
  appSelectorPrefix: string;

  /**
   * Skip import?
   */
  skipModuleImport: boolean;

  /**
   * DocBlock
   */
  docBlock?: string;
}
