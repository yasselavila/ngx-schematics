"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var sub_page_factory_1 = require("./sub-page.factory");
describe('Sub-Page Schematic', function () {
    it('should define the factory', function () {
        chai_1.expect(sub_page_factory_1.default).to.be.an('function');
    });
});
