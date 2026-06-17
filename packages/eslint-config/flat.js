import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadRules() {
  const rules = {};
  return rules;
}

const baseConfig = {
  name: 'encode/base',
  files: ['**/*.{js,mjs,cjs,jsx}'],
  ignores: ['node_modules/**', 'dist/**', 'build/**'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      window: 'readonly',
      document: 'readonly',
      navigator: 'readonly',
      console: 'readonly',
      process: 'readonly',
      require: 'readonly',
      module: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
    },
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-undef': 'error',
    'no-const-assign': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-extra-semi': 'warn',
    'no-func-assign': 'error',
    'no-irregular-whitespace': 'warn',
    'no-sparse-arrays': 'warn',
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'curly': 'warn',
    'eqeqeq': ['warn', 'always', { null: 'ignore' }],
    'no-alert': 'warn',
    'no-else-return': 'warn',
    'no-extra-bind': 'warn',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-multi-str': 'warn',
    'no-new-wrappers': 'warn',
    'no-throw-literal': 'error',
    'no-with': 'error',
    'radix': 'warn',
    'vars-on-top': 'warn',
    'wrap-iife': ['error', 'any'],
    'no-caller': 'error',
    'no-empty-pattern': 'warn',
    'no-fallthrough': 'warn',
    'no-octal': 'error',
    'no-redeclare': 'warn',
    'no-self-assign': 'warn',
    'no-sequences': 'warn',
    'no-useless-catch': 'warn',
    'no-useless-escape': 'warn',
  },
};

const es6Config = {
  name: 'encode/es6',
  files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-var': 'error',
    'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'symbol-description': 'warn',
    'no-duplicate-imports': 'warn',
  },
};

const styleConfig = {
  name: 'encode/style',
  files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
  rules: {
    'array-bracket-spacing': ['warn', 'never'],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'camelcase': ['warn', { properties: 'always' }],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    'eol-last': 'warn',
    'func-call-spacing': ['warn', 'never'],
    'indent': ['warn', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      offsetTernaryExpressions: true,
    }],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'linebreak-style': ['warn', 'unix'],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
    'no-new-object': 'warn',
    'no-trailing-spaces': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'one-var': ['warn', { initialized: 'never', uninitialized: 'never' }],
    'operator-linebreak': ['warn', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'semi': ['warn', 'always'],
    'semi-spacing': ['warn', { before: false, after: true }],
    'space-before-blocks': 'warn',
    'space-before-function-paren': ['warn', 'never'],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': ['warn', { words: true, nonwords: false }],
    'spaced-comment': ['warn', 'always', { markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }],
    'template-curly-spacing': 'warn',
  },
};

const variablesConfig = {
  name: 'encode/variables',
  files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
  rules: {
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'warn',
    'no-unused-labels': 'warn',
  },
};

const typescriptConfig = {
  name: 'encode/typescript',
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
  },
};

const reactConfig = {
  name: 'encode/react',
  files: ['**/*.{jsx,tsx}'],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      React: 'readonly',
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

const vueConfig = {
  name: 'encode/vue',
  files: ['**/*.vue'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};

const defaultConfigs = [baseConfig, es6Config, styleConfig, variablesConfig];

const typescriptConfigs = [...defaultConfigs, typescriptConfig];

const reactConfigs = [...defaultConfigs, reactConfig];

const vueConfigs = [...defaultConfigs, vueConfig];

const typescriptReactConfigs = [...defaultConfigs, typescriptConfig, reactConfig];

const typescriptVueConfigs = [...defaultConfigs, typescriptConfig, vueConfig];

export default defaultConfigs;

export {
  baseConfig,
  es6Config,
  styleConfig,
  variablesConfig,
  typescriptConfig,
  reactConfig,
  vueConfig,
  defaultConfigs,
  typescriptConfigs,
  reactConfigs,
  vueConfigs,
  typescriptReactConfigs,
  typescriptVueConfigs,
};
