"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var page_factory_1 = require("./page.factory");
describe('Page Schematic', function () {
    it('should define the factory', function () {
        chai_1.expect(page_factory_1.default).to.be.an('function');
    });
});
