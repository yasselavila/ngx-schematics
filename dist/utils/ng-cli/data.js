"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = require("process");
var fs_1 = require("fs");
var cliDataCache;
function getCliData(disableCache) {
    if (!disableCache && cliDataCache) {
        return cliDataCache;
    }
    var cliConf;
    try {
        var cliConfContent = fs_1.readFileSync('./.angular-cli.json').toString();
        cliConf = JSON.parse(cliConfContent);
    }
    catch (e) {
        console.error('ERR! Can\'t read data on \'.angular-cli.json\'');
        process_1.exit(1);
    }
    var ret = {
        isNxWorkspace: (fs_1.existsSync('./apps') && fs_1.existsSync('./libs')),
        multipleApps: (cliConf.apps && (cliConf.apps.length > 1))
    };
    var libTestExpr = /^libs\//;
    if (cliConf.apps) {
        for (var i = 0, l = cliConf.apps.length; i < l; i++) {
            var currApp = cliConf.apps[i];
            var isLib = (ret.isNxWorkspace && libTestExpr.test(currApp.root));
            var mainFileRef = (currApp.main || (isLib ? '../index.ts' : 'main.ts'));
            var mainFile = (currApp.root + '/' + mainFileRef);
            var isValid = fs_1.existsSync(mainFile);
            var currData = {
                id: (currApp.name || i),
                isApp: !isLib,
                isLib: isLib,
                isValid: isValid,
                path: (isValid ? currApp.root : null),
                mainFile: (isValid ? mainFile : null),
                prefix: (currApp.prefix || '')
            };
            if (!ret.multipleApps) {
                ret.app = currData;
            }
            else {
                (ret.apps = ret.apps || []).push(currData);
            }
        }
    }
    cliDataCache = ret;
    return ret;
}
exports.getCliData = getCliData;
function getAppData(id, isLib) {
    var cliData = getCliData();
    var apps = cliData.apps ? cliData.apps : [cliData.app];
    var app = apps
        .filter(function (val) { return val.id === id; })
        .filter(function (val) { return isLib ? val.isLib : true; })
        .shift();
    return app || null;
}
exports.getAppData = getAppData;
function getLibData(id) {
    return getAppData(id, true);
}
exports.getLibData = getLibData;
