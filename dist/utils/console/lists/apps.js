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
var Separator = require("inquirer2/lib/objects/separator");
var prompts_1 = require("../prompts");
var data_1 = require("../../ng-cli/data");
function section(name, apps) {
    var ret = [];
    ret.push(new Separator(name + ": "));
    for (var _i = 0, apps_1 = apps; _i < apps_1.length; _i++) {
        var app = apps_1[_i];
        ret.push({ value: app, name: "  " + app.id });
    }
    return ret;
}
function getAppsList(cliData) {
    var cliApps = cliData.apps;
    var ret = [];
    var apps = cliApps.filter(function (app) { return app.isApp; });
    var libs = cliApps.filter(function (app) { return app.isLib; });
    if (apps.length) {
        ret = ret.concat(section('Applications', apps));
    }
    if (libs.length) {
        ret = ret.concat(section('Libraries', libs));
    }
    return ret;
}
exports.getAppsList = getAppsList;
function selectApp() {
    return __awaiter(this, void 0, void 0, function () {
        var cliData, app, selectedApp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cliData = data_1.getCliData();
                    if (!cliData.app) return [3, 1];
                    app = cliData.app;
                    return [3, 3];
                case 1: return [4, prompts_1.select('Please, select an Application or Library', getAppsList(cliData))];
                case 2:
                    selectedApp = _a.sent();
                    app = selectedApp.value;
                    _a.label = 3;
                case 3:
                    console.log('WARN! Using %s "%s"...', (app.isLib ? 'library' : 'application'), app.id);
                    return [2, app];
            }
        });
    });
}
exports.selectApp = selectApp;
