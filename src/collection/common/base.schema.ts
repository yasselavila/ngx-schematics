/**
 * @yag/ngx-schematics
 *
 * @copyright Copyright (c) 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/ngx-schematics
 */

export interface BaseSchema {
  /**
   * Are we in a Nx workspace?
   */
  isNxWorkspace?: boolean;

  /**
   * Are we in a Nx workspace?
   */
  multipleApps?: boolean;

  /**
   * App ID
   */
  appId: string;

  /**
   * Is the selected app a library?
   */
  appIsLib?: boolean;

  /**
   * The path of the App (source directory)
   */
  appPath: string;

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
