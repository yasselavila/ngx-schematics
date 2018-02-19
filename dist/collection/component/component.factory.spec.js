"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var component_factory_1 = require("./component.factory");
describe('Component Schematic', function () {
    it('should define the factory', function () {
        chai_1.expect(component_factory_1.default).to.be.an('function');
    });
});
