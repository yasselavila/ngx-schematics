"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var guard_factory_1 = require("./guard.factory");
describe('Guard Schematic', function () {
    it('should define the factory', function () {
        chai_1.expect(guard_factory_1.default).to.be.an('function');
    });
});
