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
var schematics_1 = require("@angular-devkit/schematics");
var strings_1 = require("./strings");
function template(options) {
    return schematics_1.template(__assign({}, strings_1.default, options, { tmpl: '' }));
}
exports.template = template;
function chain(templatesSrc, host, context) {
    return schematics_1.chain([
        schematics_1.branchAndMerge(schematics_1.chain([
            schematics_1.mergeWith(templatesSrc),
        ])),
    ])(host, context);
}
exports.chain = chain;
