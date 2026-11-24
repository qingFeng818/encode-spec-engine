import path from 'path';
import fs from 'fs-extra';
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf8'));
export var UNICODE;
(function (UNICODE) {
    UNICODE["success"] = "\u2714";
    UNICODE["failure"] = "\u2716";
})(UNICODE || (UNICODE = {}));
export const PKG_NAME = pkg.name;
export const PKG_VERSION = pkg.version;
export const PROJECT_TYPES = [
    {
        name: '未使用 React、Vue、Node.js 的项目（JavaScript）',
        value: 'index',
    },
    {
        name: '未使用 React、Vue、Node.js 的项目（TypeScript）',
        value: 'typescript',
    },
    {
        name: 'React 项目（JavaScript）',
        value: 'react',
    },
    {
        name: 'React 项目（TypeScript）',
        value: 'typescript/react',
    },
    {
        name: 'Rax 项目（JavaScript）',
        value: 'rax',
    },
    {
        name: 'Rax 项目（TypeScript）',
        value: 'typescript/rax',
    },
    {
        name: 'Vue 项目（JavaScript）',
        value: 'vue',
    },
    {
        name: 'Vue 项目（TypeScript）',
        value: 'typescript/vue',
    },
    {
        name: 'Node.js 项目（JavaScript）',
        value: 'node',
    },
    {
        name: 'Node.js 项目（TypeScript）',
        value: 'typescript/node',
    },
    {
        name: '使用 ES5 及之前版本 JavaScript 的老项目',
        value: 'es5',
    },
];
export const ESLINT_CONFIG_FORMATS = [
    {
        name: '传统格式（.eslintrc.js）- 兼容 ESLint v8.x 及以下版本',
        value: 'legacy',
    },
    {
        name: 'Flat Config 格式（eslint.config.js）- ESLint v9.x/v10.x 推荐',
        value: 'flat',
    },
];
export const ESLINT_IGNORE_PATTERN = [
    'node_modules/**',
    'build/**',
    'dist/**',
    'coverage/**',
    'es/**',
    'lib/**',
    '**/*.min.js',
    '**/*-min.js',
    '**/*.bundle.js',
];
export const MARKDOWN_LINT_FILE_EXT = ['.md'];
export const STYLELINT_FILE_EXT = ['.css', '.scss', '.less', '.acss'];
export const ESLINT_FILE_EXT = ['.js', '.jsx', '.ts', '.tsx', '.vue'];
export const STYLELINT_IGNORE_PATTERN = [
    'node_modules/',
    'build/',
    'dist/',
    'coverage/',
    'es/',
    'lib/',
    '**/*.min.css',
    '**/*-min.css',
    '**/*.bundle.css',
];
export const MARKDOWN_LINT_IGNORE_PATTERN = [
    'node_modules/',
    'build/',
    'dist/',
    'coverage/',
    'es/',
    'lib/',
];
export const PRETTIER_FILE_EXT = [
    ...STYLELINT_FILE_EXT,
    ...ESLINT_FILE_EXT,
    ...MARKDOWN_LINT_FILE_EXT,
];
export const PRETTIER_IGNORE_PATTERN = [
    'node_modules/**/*',
    'build/**/*',
    'dist/**/*',
    'lib/**/*',
    'es/**/*',
    'coverage/**/*',
];
