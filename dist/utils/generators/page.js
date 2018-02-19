"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("./generator");
var PageGenerator = (function (_super) {
    __extends(PageGenerator, _super);
    function PageGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'page';
        _this.options = [
            { name: 'pagesPath', prompt: 'Enter relative path for pages', default: 'pages' },
            { name: 'pagesModuleFile', prompt: 'Enter the file where define and export your page', default: 'pages/index.ts' },
            { name: 'pageName', prompt: 'Enter the name of your page', default: 'my-page' },
            { name: 'pageTitle', prompt: 'Enter the title of your page [Name will be used if empty]', optional: true }
        ];
        return _this;
    }
    return PageGenerator;
}(generator_1.BaseGenerator));
exports.PageGenerator = PageGenerator;
