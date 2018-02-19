"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var directive_factory_1 = require("./directive.factory");
describe('Directive Schematic', function () {
    it('should define the factory', function () {
        chai_1.expect(directive_factory_1.default).to.be.an('function');
    });
});
