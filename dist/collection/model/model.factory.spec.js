"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var model_factory_1 = require("./model.factory");
describe('Model Schematic', function () {
    it('should define the factory', function () {
        chai_1.expect(model_factory_1.default).to.be.an('function');
    });
});
