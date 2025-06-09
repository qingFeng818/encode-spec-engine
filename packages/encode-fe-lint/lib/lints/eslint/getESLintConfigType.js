"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getESLintConfigType = void 0;
var glob_1 = __importDefault(require("glob"));
function getESLintConfigType(cwd, pkg) {
    var tsFiles = glob_1.default.sync('./!(node_modules)/**/*.@(ts|tsx)', { cwd: cwd });
    var reactFiles = glob_1.default.sync('./!(node_modules)/**/*.@(jsx|tsx)', { cwd: cwd });
    var vueFiles = glob_1.default.sync('./!(node_modules)/**/*.vue', { cwd: cwd });
    var dependencies = Object.keys(pkg.dependencies || {});
    var language = tsFiles.length > 0 ? 'typescript' : '';
    var dsl = '';
    if (reactFiles.length > 0 || dependencies.some(function (name) { return /^react(-|$)/.test(name); })) {
        dsl = 'react';
    }
    else if (vueFiles.length > 0 || dependencies.some(function (name) { return /^vue(-|$)/.test(name); })) {
        dsl = 'vue';
    }
    else if (dependencies.some(function (name) { return /^rax(-|$)/.test(name); })) {
        dsl = 'rax';
    }
    return 'eslint-config-encode/' + "".concat(language, "/").concat(dsl).replace(/\/$/, '/index').replace(/^\//, '');
}
exports.getESLintConfigType = getESLintConfigType;
