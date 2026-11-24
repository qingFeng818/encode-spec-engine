import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const baseConfig = {
  name: "encode/base",
  files: ["**/*.{js,mjs,cjs,jsx}"],
  ignores: ["node_modules/**", "dist/**", "build/**"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      window: "readonly",
      document: "readonly",
      navigator: "readonly",
      console: "readonly",
      process: "readonly",
      require: "readonly",
      module: "readonly",
      __dirname: "readonly",
      __filename: "readonly",
    },
  },
  rules: {
    // ===== 错误预防规则 =====
    "no-console": "warn",
    "no-debugger": "error",
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        caughtErrors: "all",
      },
    ],
    "no-undef": "error",
    "no-const-assign": "error",
    "no-dupe-keys": "error",
    "no-dupe-args": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-irregular-whitespace": "error",
    "no-sparse-arrays": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "use-isnan": "error",
    "valid-typeof": ["error", { requireStringLiterals: true }],
    "for-direction": "error",
    "getter-return": ["error", { allowImplicit: true }],
    "no-async-promise-executor": "error",
    "no-await-in-loop": "warn",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "always"],
    "no-constant-condition": "warn",
    "no-control-regex": "off",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-invalid-regexp": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-template-curly-in-string": "warn",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "require-atomic-updates": "warn",

    // ===== ESLint v10.x 新增错误预防规则 =====
    "no-dupe-else-if": "error",
    "no-constant-binary-expression": "warn",

    // ===== 最佳实践规则 =====
    curly: ["error", "multi-line"],
    eqeqeq: ["warn", "always", { null: "ignore" }],
    "no-alert": "warn",
    "no-else-return": "off",
    "no-extra-bind": "error",
    "no-implied-eval": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-new-wrappers": "error",
    "no-throw-literal": "warn",
    "no-with": "error",
    radix: "warn",
    "vars-on-top": "off",
    "wrap-iife": ["error", "any", { functionPrototypeMethods: false }],
    "no-caller": "error",
    "no-empty-pattern": "error",
    "no-fallthrough": "error",
    "no-octal": "error",
    "no-redeclare": "error",
    "no-self-assign": "error",
    "no-sequences": "error",
    "no-useless-catch": "error",
    "no-useless-escape": "error",
    "accessor-pairs": "off",
    "array-callback-return": ["error", { allowImplicit: true }],
    "block-scoped-var": "error",
    "class-methods-use-this": "off",
    complexity: ["off", 10],
    "consistent-return": "off",
    "default-case": ["warn", { commentPattern: "^no default$" }],
    "dot-location": ["error", "property"],
    "dot-notation": ["error", { allowKeywords: true }],
    "guard-for-in": "warn",
    "max-classes-per-file": "off",
    "no-case-declarations": "error",
    "no-div-regex": "off",
    "no-empty-function": [
      "error",
      { allow: ["arrowFunctions", "functions", "methods"] },
    ],
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-global-assign": ["error", { exceptions: [] }],
    "no-implicit-coercion": "off",
    "no-implicit-globals": "off",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-labels": ["warn", { allowLoop: false, allowSwitch: false }],
    "no-magic-numbers": "off",
    "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    "no-new": "error",
    "no-new-func": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "warn",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc",
          "e",
          "ctx",
          "draft",
          "req",
          "request",
          "res",
          "response",
          "$scope",
        ],
      },
    ],
    "no-proto": "error",
    "no-restricted-properties": "off",
    "no-return-assign": ["error", "always"],
    "no-return-await": "warn",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-unmodified-loop-condition": "warn",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-unused-labels": "error",
    "no-useless-call": "off",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "prefer-promise-reject-errors": ["warn", { allowEmptyReject: true }],
    "require-await": "off",
    "require-unicode-regexp": "off",
    yoda: "warn",

    // ===== ESLint v9.x/v10.x 新增最佳实践规则 =====
    "no-empty-static-block": "warn",
    "no-promise-executor-return": "warn",
  },
};

const es6Config = {
  name: "encode/es6",
  files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // ===== 箭头函数规则 =====
    "arrow-body-style": [
      "off",
      "as-needed",
      { requireReturnForObjectLiteral: false },
    ],
    "arrow-parens": ["warn", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],

    // ===== 类和构造函数规则 =====
    "constructor-super": "error",
    "no-constructor-return": "error",
    "no-class-assign": "error",
    "no-dupe-class-members": "error",

    // ===== 对象和属性规则 =====
    "no-confusing-arrow": "error",
    "no-const-assign": "error",
    "no-duplicate-imports": "off",
    "no-import-assign": "error",

    // ===== 构造函数和对象创建规则 =====
    "no-new-symbol": "error",
    "no-new-native-nonconstructor": "error",

    // ===== this 和 super 规则 =====
    "no-this-before-super": "error",

    // ===== 对象属性规则 =====
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": [
      "error",
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
    ],

    // ===== 变量声明规则 =====
    "no-var": "error",

    // ===== 对象简写规则 =====
    "object-shorthand": [
      "error",
      "always",
      { ignoreConstructors: false, avoidQuotes: true },
    ],

    // ===== 回调函数规则 =====
    "prefer-arrow-callback": [
      "error",
      { allowNamedFunctions: false, allowUnboundThis: true },
    ],

    // ===== const/let 规则 =====
    "prefer-const": [
      "error",
      { destructuring: "any", ignoreReadBeforeAssign: true },
    ],

    // ===== 解构规则 =====
    "prefer-destructuring": [
      "warn",
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false },
      },
      { enforceForRenamedProperties: false },
    ],

    // ===== 数值字面量规则 =====
    "prefer-numeric-literals": "off",

    // ===== 函数参数规则 =====
    "prefer-rest-params": "warn",

    // ===== 函数调用规则 =====
    "prefer-spread": "warn",

    // ===== 字符串规则 =====
    "prefer-template": "warn",

    // ===== generator 函数规则 =====
    "require-yield": "error",

    // ===== 空格规则 =====
    "rest-spread-spacing": ["error", "never"],

    // ===== import 排序规则 =====
    "sort-imports": [
      "off",
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],

    // ===== Symbol 规则 =====
    "symbol-description": "warn",

    // ===== 模板字符串规则 =====
    "template-curly-spacing": "warn",

    // ===== yield 规则 =====
    "yield-star-spacing": ["error", "after"],

    // ===== ESLint v10.x 新增规则 =====
    "no-loss-of-precision": "error",
  },
};

const styleConfig = {
  name: "encode/style",
  files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
  rules: {
    // ===== 数组和对象规则 =====
    "array-bracket-newline": "off",
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": "off",
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "object-curly-newline": "off",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true },
    ],

    // ===== 命名规则 =====
    camelcase: "off",
    "capitalized-comments": "off",
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",

    // ===== 逗号规则 =====
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "comma-linebreak": ["error", "always"],

    // ===== 计算属性规则 =====
    "computed-property-spacing": ["error", "never"],

    // ===== 行尾规则 =====
    "eol-last": ["warn", "always"],

    // ===== 函数规则 =====
    "func-call-spacing": ["error", "never"],
    "func-name-matching": [
      "off",
      "always",
      { includeCommonJSModuleExports: false },
    ],
    "func-names": "off",
    "func-style": "off",
    "function-paren-newline": ["error", "consistent"],

    // ===== 缩进规则 =====
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
      },
    ],

    // ===== JSX 规则 =====
    "jsx-quotes": ["error", "prefer-double"],

    // ===== 键值规则 =====
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],

    // ===== 关键字规则 =====
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    // ===== 行规则 =====
    "line-comment-position": [
      "off",
      { position: "above", ignorePattern: "", applyDefaultPatterns: true },
    ],
    "linebreak-style": "off",
    "lines-between-class-members": [
      "off",
      "always",
      { exceptAfterSingleLine: false },
    ],
    "lines-around-comment": "off",

    // ===== 复杂度规则 =====
    "max-depth": ["off", 4],
    "max-len": [
      "warn",
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "max-lines": [
      "off",
      { max: 1000, skipBlankLines: true, skipComments: true },
    ],
    "max-lines-per-function": [
      "off",
      { max: 80, skipBlankLines: true, skipComments: true, IIFEs: true },
    ],
    "max-nested-callbacks": "off",
    "max-params": ["off", 3],
    "max-statements": ["off", 10],
    "max-statements-per-line": ["off", { max: 1 }],

    // ===== 注释规则 =====
    "multiline-comment-style": ["off", "starred-block"],

    // ===== 三元表达式规则 =====
    "multiline-ternary": ["off", "never"],

    // ===== 构造函数规则 =====
    "new-cap": [
      "error",
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List",
        ],
      },
    ],
    "new-parens": "error",
    "newline-per-chained-call": ["warn", { ignoreChainWithDepth: 4 }],

    // ===== 禁止规则 =====
    "no-array-constructor": "error",
    "no-bitwise": "warn",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["**", "+"],
          ["**", "-"],
          ["**", "*"],
          ["**", "/"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        allowSamePrecedence: false,
      },
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": ["error"],
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": ["off", { allowForLoopAfterthoughts: true }],
    "no-restricted-syntax": "off",
    "no-tabs": "error",
    "no-ternary": "off",
    "no-trailing-spaces": [
      "error",
      { skipBlankLines: false, ignoreComments: false },
    ],
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-whitespace-before-property": "error",

    // ===== 语句位置规则 =====
    "nonblock-statement-body-position": ["error", "beside", { overrides: {} }],

    // ===== 变量声明规则 =====
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "always"],

    // ===== 操作符规则 =====
    "operator-assignment": ["warn", "always"],
    "operator-linebreak": [
      "warn",
      "after",
      { overrides: { "?": "before", ":": "before" } },
    ],

    // ===== 块规则 =====
    "padded-blocks": [
      "warn",
      { blocks: "never", classes: "never", switches: "never" },
    ],
    "padding-line-between-statements": "off",

    // ===== 对象规则 =====
    "prefer-object-spread": "off",
    "quote-props": [
      "error",
      "as-needed",
      { keywords: false, unnecessary: true, numbers: false },
    ],

    // ===== 字符串规则 =====
    quotes: ["error", "single", { avoidEscape: true }],

    // ===== JSDoc 规则 =====
    "require-jsdoc": "off",

    // ===== 分号规则 =====
    semi: ["error", "always"],
    "semi-spacing": ["error", { before: false, after: true }],
    "semi-style": ["error", "last"],

    // ===== 排序规则 =====
    "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],
    "sort-vars": "off",

    // ===== 空格规则 =====
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never", asyncArrow: "always" },
    ],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      { words: true, nonwords: false, overrides: {} },
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        line: { exceptions: ["-", "+"], markers: ["=", "!", "/"] },
        block: { exceptions: ["-", "+"], markers: ["=", "!"], balanced: true },
      },
    ],
    "switch-colon-spacing": ["error", { after: true, before: false }],
    "template-tag-spacing": ["error", "never"],

    // ===== Unicode 和正则规则 =====
    "unicode-bom": ["off", "never"],
    "wrap-regex": "off",

    // ===== 隐式返回规则 =====
    "implicit-arrow-linebreak": ["off", "beside"],
  },
};

const variablesConfig = {
  name: "encode/variables",
  files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
  rules: {
    // ===== 变量声明规则 =====
    "init-declarations": "off",

    // ===== 变量使用规则 =====
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "off",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        caughtErrors: "all",
      },
    ],
    "no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false },
    ],
  },
};

const typescriptConfig = {
  name: "encode/typescript",
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
      createDefaultProgram: true,
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      extraFileExtensions: [".vue"],
    },
  },
  plugins: ["@typescript-eslint"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".d.ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
    "import/extensions": [".js", ".ts", ".mjs"],
  },
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/ban-ts-comment": [
      "warn",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
        "ts-check": "allow-with-description",
      },
    ],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-types": "off",
    "brace-style": "off",
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs",
      { allowSingleLine: true },
    ],
    "@typescript-eslint/class-literal-property-style": ["warn", "fields"],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": [
      "error",
      { before: false, after: true },
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "off",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      { accessibility: "no-public" },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    indent: "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
      },
    ],
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": "off",
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        default: [
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "static-field",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-field",
          "protected-field",
          "private-field",
          "instance-field",
          "field",
          "constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "public-method",
          "protected-method",
          "private-method",
          "instance-method",
          "method",
        ],
      },
    ],
    "@typescript-eslint/method-signature-style": ["warn", "property"],
    camelcase: "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/naming-convention": "off",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-base-to-string": "off",
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-dynamic-delete": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["arrowFunctions", "functions", "methods"] },
    ],
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "off",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-for-in-array": "off",
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-inferrable-types": "warn",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "off",
    "@typescript-eslint/no-invalid-void-type": "error",
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-misused-new": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-namespace": [
      "error",
      { allowDeclarations: true, allowDefinitionFiles: true },
    ],
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "warn",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-this-alias": ["warn", { allowDestructuring: true }],
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "off",
    "@typescript-eslint/no-unnecessary-type-arguments": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        caughtErrors: "all",
      },
    ],
    "@typescript-eslint/no-unused-vars-experimental": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false },
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-as-const": "warn",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/prefer-reduce-type-parameter": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/promise-function-async": "off",
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "single", { avoidEscape: true }],
    "require-await": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/restrict-template-expressions": "off",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "off",
    semi: "off",
    "@typescript-eslint/semi": ["error", "always"],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never", asyncArrow: "always" },
    ],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "off",
    "@typescript-eslint/triple-slash-reference": [
      "error",
      { path: "never", types: "always", lib: "always" },
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/typedef": [
      "error",
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: true,
        variableDeclaration: false,
      },
    ],
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/unified-signatures": "warn",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["error"],
  },
};

const reactConfig = {
  name: "encode/react",
  files: ["**/*.{jsx,tsx}"],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      React: "readonly",
    },
  },
  plugins: ["react", "react-hooks"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"],
      },
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  rules: {
    "react/display-name": ["warn", { ignoreTranspilerName: false }],
    "react/forbid-prop-types": ["warn", { forbid: ["any", "array", "object"] }],
    "react/jsx-boolean-value": ["error", "never", { always: [] }],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],
    "react/jsx-handler-names": "off",
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "off",
    "react/jsx-max-props-per-line": [
      "error",
      { maximum: 1, when: "multiline" },
    ],
    "react/jsx-no-bind": [
      "warn",
      { ignoreRefs: false, allowArrowFunctions: true, allowBind: false },
    ],
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
    "react/jsx-no-literals": "off",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": ["error", { allowAllCaps: true, ignore: [] }],
    "react/sort-prop-types": "off",
    "react/jsx-sort-prop-types": "off",
    "react/jsx-sort-props": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-danger": "warn",
    "react/no-deprecated": "error",
    "react/no-will-update-set-state": "error",
    "react/no-direct-mutation-state": "off",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    "react/no-set-state": "off",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unknown-property": "error",
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": "off",
    "react/prop-types": [
      "warn",
      { ignore: [], customValidators: [], skipUndeclared: false },
    ],
    "react/react-in-jsx-scope": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "off",
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: true, assignment: true, return: true, arrow: true },
    ],
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-no-target-blank": "warn",
    "react/no-access-state-in-setstate": "error",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".jsx", ".js", ".tsx", ".ts", ".vue"] },
    ],
    "react/jsx-no-comment-textnodes": "error",
    "react/no-render-return-value": "error",
    "react/require-optimization": "off",
    "react/no-find-dom-node": "error",
    "react/forbid-component-props": "off",
    "react/forbid-elements": "off",
    "react/no-danger-with-children": "error",
    "react/no-unused-prop-types": [
      "error",
      { customValidators: [], skipShapeProps: true },
    ],
    "react/style-prop-object": "error",
    "react/no-unescaped-entities": "error",
    "react/no-children-prop": "error",
    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
      },
    ],
    "react/jsx-space-before-closing": "off",
    "react/no-array-index-key": "warn",
    "react/require-default-props": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/void-dom-elements-no-children": "error",
    "react/default-props-match-prop-types": [
      "warn",
      { allowRequiredDefaults: false },
    ],
    "react/no-redundant-should-component-update": "error",
    "react/no-unused-state": "error",
    "react/boolean-prop-naming": "off",
    "react/no-typos": "error",
    "react/jsx-curly-brace-presence": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};

const vueConfig = {
  name: "encode/vue",
  files: ["**/*.vue"],
  languageOptions: {
    parser: "vue-eslint-parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "vue/comment-directive": "error",
    "vue/jsx-uses-vars": "error",
    "vue/no-shared-component-data": "error",
    "vue/require-prop-type-constructor": "error",
    "vue/require-valid-default-prop": "error",
    "vue/require-v-for-key": "error",
    "vue/no-use-v-if-with-v-for": "warn",
    "vue/no-async-in-computed-properties": "error",
    "vue/no-dupe-keys": "error",
    "vue/no-duplicate-attributes": "error",
    "vue/no-parsing-error": [
      "error",
      {
        "x-invalid-end-tag": false,
        "invalid-first-character-of-tag-name": false,
      },
    ],
    "vue/no-reserved-keys": "error",
    "vue/no-side-effects-in-computed-properties": "error",
    "vue/no-template-key": "warn",
    "vue/no-textarea-mustache": "error",
    "vue/no-unused-components": "warn",
    "vue/no-unused-vars": "warn",
    "vue/require-component-is": "warn",
    "vue/require-render-return": "error",
    "vue/return-in-computed-property": "error",
    "vue/use-v-on-exact": "error",
    "vue/valid-template-root": "error",
    "vue/valid-v-bind": "error",
    "vue/valid-v-cloak": "error",
    "vue/valid-v-else-if": "error",
    "vue/valid-v-else": "error",
    "vue/valid-v-for": "error",
    "vue/valid-v-html": "error",
    "vue/valid-v-if": "error",
    "vue/valid-v-model": "error",
    "vue/valid-v-on": "error",
    "vue/valid-v-once": "error",
    "vue/valid-v-pre": "error",
    "vue/valid-v-show": "error",
  },
};

const defaultConfigs = [baseConfig, es6Config, styleConfig, variablesConfig];
  globalIgnoresConfig,
  baseConfig,
  es6Config,
  styleConfig,
  variablesConfig,
];

const typescriptConfigs = [...defaultConfigs, typescriptConfig];

const reactConfigs = [...defaultConfigs, reactConfig];

const vueConfigs = [...defaultConfigs, vueConfig];

const typescriptReactConfigs = [
  ...defaultConfigs,
  typescriptConfig,
  reactConfig,
];

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
