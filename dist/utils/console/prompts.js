"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require('inquirer2');
function prompt(message, defaultValue) {
    return new Promise(function (resolve, reject) {
        message += ':';
        inquirer().prompt({
            type: 'input',
            name: 'value',
            default: defaultValue,
            message: message
        }, function (choice) {
            if (!!choice) {
                resolve(choice);
            }
            else {
                reject(new Error('Unknown error'));
            }
        });
    });
}
exports.prompt = prompt;
function select(message, choices) {
    return new Promise(function (resolve, reject) {
        inquirer().prompt({
            type: 'list',
            name: 'value',
            message: message,
            choices: choices
        }, function (choice) {
            if (!!choice) {
                resolve(choice);
            }
            else {
                reject(new Error('Unknown option selected'));
            }
        });
    });
}
exports.select = select;
function confirm(message, defaultValue) {
    if (defaultValue === void 0) { defaultValue = 'n'; }
    return new Promise(function (resolve, reject) {
        message += ':';
        inquirer().prompt({
            type: 'confirm',
            name: 'value',
            default: ('y' === defaultValue),
            message: message
        }, function (choice) {
            if (!!choice) {
                resolve(choice);
            }
            else {
                reject(new Error('Unknown error'));
            }
        });
    });
}
exports.confirm = confirm;
