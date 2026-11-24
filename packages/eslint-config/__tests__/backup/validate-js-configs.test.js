/**
 * 验证 JS
 */

import assert from "assert";
import eslint from "eslint";
import path from "path";
import sumBy from "lodash/sumBy.js";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

describe("Validate JS configs", () => {
  it("Validate encode-eslint-config", async () => {
    const filePath = path.join(__dirname, "./fixtures/index.js");

    const cli = new eslint.ESLint({
      useAtSignConfig: false,
      configs: compat.configFile("./index.js"),
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.notEqual(sumBy(results, "warningCount"), 0);
  });

  it("Validate encode-eslint-config/es5", async () => {
    const filePath = path.join(__dirname, "./fixtures/es5.js");

    const cli = new eslint.ESLint({
      useAtSignConfig: false,
      configs: compat.configFile("./es5.js"),
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.equal(sumBy(results, "warningCount"), 0);

    // 验证 es5 覆盖的规则是否正常，取 comma-dangle 进行测试
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId === "comma-dangle";
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it("Validate encode-eslint-config/vue", async () => {
    const filePath = path.join(__dirname, "./fixtures/vue.vue");

    const cli = new eslint.ESLint({
      useAtSignConfig: false,
      configs: compat.configFile("./vue.js"),
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.equal(sumBy(results, "warningCount"), 0);

    // 验证 eslint-plugin-vue 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf("vue/") !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it("Validate encode-eslint-config/essential", async () => {
    const filePath = path.join(__dirname, "./fixtures/index.js");

    const cli = new eslint.ESLint({
      useAtSignConfig: false,
      configs: compat.configFile("./essential/index.js"),
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.equal(sumBy(results, "errorCount"), 0);
    assert.notEqual(sumBy(results, "warningCount"), 0);

    // 验证黑名单中的规则已关闭
    const { messages } = results[0];

    // 验证 semi 被关闭
    const semiErrors = messages.filter((result) => {
      return result.ruleId === "semi";
    });
    assert.equal(semiErrors.length, 0);

    // 验证 comma-spacing 被降级
    const commaSpacingErrors = messages.filter((result) => {
      return result.ruleId === "comma-spacing";
    });
    assert.equal(commaSpacingErrors[0].severity, 1);
  });

  it("Validate encode-eslint-config/essential/es5", async () => {
    const filePath = path.join(__dirname, "./fixtures/es5.js");

    const cli = new eslint.ESLint({
      useAtSignConfig: false,
      configs: compat.configFile("./essential/es5.js"),
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.notEqual(sumBy(results, "warningCount"), 0);
    // 验证 es5 覆盖的规则是否正常，取 comma-dangle 进行测试
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId === "comma-dangle";
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证黑名单中的规则已关闭，取 semi 进行测试
    const errorReportedByReactPluginBlackList = messages.filter((result) => {
      return result.ruleId === "semi";
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it("Validate encode-eslint-config/essential/react", async () => {
    const filePath = path.join(__dirname, "./fixtures/react.jsx");

    const cli = new eslint.ESLint({
      useAtSignConfig: false,
      configs: compat.configFile("./essential/react.js"),
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.notEqual(sumBy(results, "warningCount"), 0);
    // 验证 react plugin 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf("react/") !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证黑名单中的规则已关闭，取 react/jsx-indent 进行测试
    const errorReportedByReactPluginBlackList = messages.filter((result) => {
      return result.ruleId === "react/jsx-indent";
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it("Validate encode-eslint-config/essential/vue", async () => {
    const filePath = path.join(__dirname, "./fixtures/vue.vue");

    const cli = new eslint.ESLint({
      useAtSignConfig: false,
      configs: compat.configFile("./essential/vue.js"),
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.equal(sumBy(results, "warningCount"), 0);

    // 验证 vue plugin 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf("vue/") !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证黑名单中的规则已关闭
    const errorReportedByReactPluginBlackList = messages.filter((result) => {
      return result.ruleId === "indent";
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it("Validate encode-eslint-config/node", async () => {
    const filePath = path.join(__dirname, "./fixtures/node.js");

    const cli = new eslint.ESLint({
      useAtSignConfig: false,
      configs: compat.configFile("./node.js"),
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证已开启的 link 规则是否校验正常
    const results = await cli.lintFiles([filePath]);
    const { messages, errorCount, warningCount } = results[0];
    const ruleIds = Array.from(messages.map((item) => item.ruleId));
    assert.strictEqual(!ruleIds.includes("n/prefer-promises/fs"), true);
    assert.strictEqual(!ruleIds.includes("no-unused-vars"), true);
    assert.strictEqual(!ruleIds.includes("n/no-new-require"), true);
    assert.strictEqual(!ruleIds.includes("semi"), true);
    assert.strictEqual(!ruleIds.includes("quotes"), true);
    assert.strictEqual(errorCount, 7);
    assert.strictEqual(warningCount, 4);

    // 验证已关闭的 link 规则是否校验正常，以 n/exports-style 为例
    assert.strictEqual(ruleIds.includes("n/exports-style"), false);
  });
});
