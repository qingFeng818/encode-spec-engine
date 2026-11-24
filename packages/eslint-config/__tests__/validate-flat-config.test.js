/**
 * 验证 Flat Config 配置
 */

import assert from "assert";
import eslint from "eslint";
import path from "path";
import sumBy from "lodash/sumBy.js";
import { fileURLToPath } from "url";
import config from "../flat.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("Validate Flat Config", () => {
  it("Validate default config", async () => {
    const filePath = path.join(__dirname, "./fixtures/index.js");

    const cli = new eslint.ESLint({
      overrideConfig: config,
      ignore: false,
    });

    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.notEqual(sumBy(results, "warningCount"), 0);
  });

  it("Validate react config", async () => {
    const filePath = path.join(__dirname, "./fixtures/react.jsx");

    const cli = new eslint.ESLint({
      overrideConfig: [
        ...config,
        {
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
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
            "react/react-in-jsx-scope": "off",
          },
        },
      ],
      ignore: false,
    });

    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.notEqual(sumBy(results, "warningCount"), 0);

    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf("react/") !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it("Validate vue config", async () => {
    const filePath = path.join(__dirname, "./fixtures/vue.vue");

    const cli = new eslint.ESLint({
      overrideConfig: [
        ...config,
        {
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
        },
      ],
      ignore: false,
    });

    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.equal(sumBy(results, "warningCount"), 0);

    const { messages } = results[0];
    const errorReportedByVuePlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf("vue/") !== -1;
    });
    assert.notEqual(errorReportedByVuePlugin.length, 0);
  });

  it("Validate typescript config", async () => {
    const filePath = path.join(__dirname, "./fixtures/ts.ts");

    const cli = new eslint.ESLint({
      overrideConfig: [
        ...config,
        {
          name: "encode/typescript",
          files: ["**/*.{ts,tsx}"],
          languageOptions: {
            parser: "@typescript-eslint/parser",
            parserOptions: {
              project: path.join(__dirname, "./fixtures/tsconfig.json"),
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
            "@typescript-eslint/no-unused-vars": [
              "error",
              {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: true,
                caughtErrors: "all",
              },
            ],
            "@typescript-eslint/no-redeclare": ["error"],
          },
        },
      ],
      ignore: false,
    });

    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.equal(sumBy(results, "warningCount"), 0);

    const { messages } = results[0];
    const errorReportedByTSPlugin = messages.filter((result) => {
      return (
        result.ruleId && result.ruleId.indexOf("@typescript-eslint/") !== -1
      );
    });
    assert.notEqual(errorReportedByTSPlugin.length, 0);
  });
});
