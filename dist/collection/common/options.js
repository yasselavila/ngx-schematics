"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var strings_1 = require("./strings");
function addDocBlock(options) {
    if (options.appMainFile && fs_1.existsSync(options.appMainFile)) {
        var mainFileContent = fs_1.readFileSync(options.appMainFile).toString();
        if ('/**' === mainFileContent.substring(0, 3)) {
            options.docBlock = mainFileContent.substring(0, (mainFileContent.indexOf('*/') + 2)) + "\n\n";
        }
    }
    options.docBlock = options.docBlock || '';
    return options;
}
function addDescriptors(options) {
    var appTypeDesc = options.appIsLib ? 'Lib' : 'App';
    var appIdDesc = strings_1.default.capitalize(options.appId);
    options.appTestsNs = (options.isNxWorkspace || options.multipleApps)
        ? "[" + appTypeDesc + ": " + appIdDesc + "] "
        : '';
    options.appSelectorPrefixNs = options.appSelectorPrefix ? options.appSelectorPrefix + "-" : '';
    return options;
}
function fixOptions(options) {
    addDocBlock(options);
    addDescriptors(options);
    return options;
}
exports.fixOptions = fixOptions;
