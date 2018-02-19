"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular-devkit/core");
var dashSanitizer = /(\-{2,})/gi;
function toDashes(str) {
    return core_1.strings.dasherize(str).replace(dashSanitizer, '-');
}
exports.toDashes = toDashes;
function constantStyle(str) {
    return core_1.strings.underscore(toDashes(str)).toUpperCase();
}
exports.constantStyle = constantStyle;
function titleStyle(str) {
    return toDashes(str)
        .split('-')
        .map(function (val) { return core_1.strings.capitalize(val); })
        .join(' ');
}
exports.titleStyle = titleStyle;
exports.default = __assign({}, core_1.strings, { toDashes: toDashes,
    constantStyle: constantStyle,
    titleStyle: titleStyle });
