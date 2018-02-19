"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
var common_1 = require("../common");
function default_1(options) {
    common_1.fixOptions(options);
    return function (host, context) {
        var templatesSrc = schematics_1.apply(schematics_1.url('./files'), [
            common_1.template(options),
            schematics_1.move(options.appPath + "/" + options.servicesPath)
        ]);
        return common_1.chain(templatesSrc, host, context);
    };
}
exports.default = default_1;
