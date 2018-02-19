"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var pipe_factory_1 = require("./pipe.factory");
describe('Pipe Schematic', function () {
    it('should define the factory', function () {
        chai_1.expect(pipe_factory_1.default).to.be.an('function');
    });
});
