"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uiGeneratorGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
const child_process_1 = require("child_process");
function uiGeneratorGenerator(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const command = `npm install ${options.name}@latest`;
        (0, child_process_1.execSync)(command, { stdio: 'inherit' });
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.uiGeneratorGenerator = uiGeneratorGenerator;
exports.default = uiGeneratorGenerator;
//# sourceMappingURL=generator.js.map