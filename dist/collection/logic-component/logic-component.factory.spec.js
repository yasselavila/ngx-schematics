"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var logic_component_factory_1 = require("./logic-component.factory");
describe('Logic-Component Schematic', function () {
    it('should define the factory', function () {
        chai_1.expect(logic_component_factory_1.default).to.be.an('function');
    });
});
