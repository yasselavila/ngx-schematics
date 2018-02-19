"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var form_factory_1 = require("./form.factory");
describe('Form Schematic', function () {
    it('should define the factory', function () {
        chai_1.expect(form_factory_1.default).to.be.an('function');
    });
});
