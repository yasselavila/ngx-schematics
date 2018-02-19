"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = require("process");
var argExpr = /^\-\-([a-z][a-z0-9]*)(=(.*))?$/i;
var argsCache;
function getConsoleArgs(disableCache) {
    if (!disableCache && argsCache) {
        return argsCache;
    }
    var args = process_1.argv.slice(2);
    var ret = {};
    for (var i = 0, l = args.length; i < l; i++) {
        var matches = args[i].match(argExpr);
        if (matches) {
            ret[matches[1]] = matches[3] || true;
        }
    }
    argsCache = ret;
    return ret;
}
exports.getConsoleArgs = getConsoleArgs;
