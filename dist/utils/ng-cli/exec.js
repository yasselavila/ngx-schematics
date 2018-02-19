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
var os_1 = require("os");
var child_process_1 = require("child_process");
var process_1 = require("process");
var data_1 = require("./data");
var argv_1 = require("../console/argv");
var winExpr = /^win/;
var isWin = winExpr.test(os_1.platform());
function ngCli(appData, cliData, generatorName, genOptions, args) {
    return new Promise(function (resolve, reject) {
        var globalCmd = isWin ? 'ng.cmd' : 'ng';
        var cmd = globalCmd;
        var output = '';
        var isError = false;
        var cliOptions = [
            'g',
            generatorName
        ].concat(genOptions, [
            "--isNxWorkspace=" + cliData.isNxWorkspace,
            "--multipleApps=" + cliData.multipleApps,
            "--appPath=" + appData.path,
            "--appMainFile=" + appData.mainFile,
            "--appSelectorPrefix=" + appData.prefix,
            "--appIsLib=" + appData.isLib,
            "--appId=" + appData.id,
            "--app=" + appData.id,
            '--collection=@yag/ngx-schematics'
        ]);
        if (args.debug) {
            console.log('Options: ', cliOptions);
            console.log('');
        }
        var ngCli = child_process_1.spawn(cmd, cliOptions);
        ngCli.stdout.on('data', function (data) {
            output += data;
        });
        ngCli.stderr.on('data', function (data) {
            output = !isError ? data : (output + data);
            isError = true;
        });
        ngCli.on('close', function (code) {
            resolve({
                isError: (isError || (0 !== code)),
                code: code,
                output: output.toString ? output.toString() : String(output)
            });
        });
    });
}
function execNgCli(appData, generator) {
    return __awaiter(this, void 0, void 0, function () {
        var consoleArgs, generatorOptions, cliOutput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    consoleArgs = argv_1.getConsoleArgs();
                    return [4, generator.getOptions(appData, consoleArgs)];
                case 1:
                    generatorOptions = _a.sent();
                    if (!generatorOptions) {
                        console.log('BYE!');
                        process_1.exit(0);
                    }
                    return [4, ngCli(appData, data_1.getCliData(), generator.getName(), generatorOptions, consoleArgs)];
                case 2:
                    cliOutput = _a.sent();
                    if (cliOutput && consoleArgs.debug) {
                        console[cliOutput.isError ? 'error' : 'log'](cliOutput.output);
                    }
                    console.log('@angular/cli: %s!', ((!cliOutput || cliOutput.isError) ? 'ERR' : 'done'));
                    return [2, (!cliOutput || cliOutput.error) ? 1 : 0];
            }
        });
    });
}
exports.execNgCli = execNgCli;
