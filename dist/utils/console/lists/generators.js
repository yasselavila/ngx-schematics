"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts_1 = require("../prompts");
var page_1 = require("../../generators/page");
var component_1 = require("../../generators/component");
var logic_component_1 = require("../../generators/logic-component");
var directive_1 = require("../../generators/directive");
var pipe_1 = require("../../generators/pipe");
var guard_1 = require("../../generators/guard");
var service_1 = require("../../generators/service");
var model_1 = require("../../generators/model");
function getGeneratorsList() {
    return [
        { name: 'Page', value: function () { return new page_1.PageGenerator(); } },
        { name: 'Component', value: function () { return new component_1.ComponentGenerator(); } },
        { name: 'Logic-Component', value: function () { return new logic_component_1.LogicComponentGenerator(); } },
        { name: 'Directive', value: function () { return new directive_1.DirectiveGenerator(); } },
        { name: 'Pipe', value: function () { return new pipe_1.PipeGenerator(); } },
        { name: 'Guard', value: function () { return new guard_1.GuardGenerator(); } },
        { name: 'Service', value: function () { return new service_1.ServiceGenerator(); } },
        { name: 'Model', value: function () { return new model_1.ModelGenerator(); } }
    ];
}
exports.getGeneratorsList = getGeneratorsList;
function selectGenerator() {
    return __awaiter(this, void 0, void 0, function () {
        var selectedGenerator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, prompts_1.select('What do you need to create?', getGeneratorsList())];
                case 1:
                    selectedGenerator = _a.sent();
                    return [2, selectedGenerator.value.call()];
            }
        });
    });
}
exports.selectGenerator = selectGenerator;
