"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var service_factory_1 = require("./service.factory");
describe('Service Schematic', function () {
    it('should define the factory', function () {
        chai_1.expect(service_factory_1.default).to.be.an('function');
    });
});
