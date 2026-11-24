/*
 * @Author: qingfeng818 dduuyyuu@qq.com
 * @Date: 2025-06-07 11:34:46
 * @LastEditors: qingfeng818 dduuyyuu@qq.com
 * @LastEditTime: 2025-06-07 15:32:34
 * @FilePath: \encode-spec-engine\packages\eslint-config\index.js
 * @Description: ESLint 配置入口文件，适配 ESLint v9.x Flat Config
 */
import babelParser from "@babel/eslint-parser";
import { defineConfig } from "eslint/config";
import path from "path";
import { fileURLToPath } from "url";

import bestPractices from "./rules/base/best-practices.js";
import possibleErrors from "./rules/base/possible-errors.js";
import style from "./rules/base/style.js";
import variables from "./rules/base/variables.js";
import es6 from "./rules/base/es6.js";
import strict from "./rules/base/strict.js";
import imports from "./rules/imports.js";
import vue from "./rules/vue.js";

// const __filename = fileURLToPath(import.meta.url);

export default defineConfig([
  // 使用 FlatCompat 转换旧格式的 extends 配置
  // 注意：compat.extends 的参数是多个字符串，而不是一个数组

  {
    name: "encode/parser",
    linterOptions: {
      noInlineConfig: true,
    },
    extends: [
      "js/recommended",
      bestPractices,
      possibleErrors,
      style,
      variables,
      es6,
      strict,
      imports,
      vue,
    ],
    ignores: [
      "**/*.spec.js", // 所有测试文件
      "**/*.test.js", // 所有测试文件
      "dist/**", // 构建输出目录
      "build/**", // 构建输出目录
      "static/**", // 静态资源目录
      "node_modules/**", // Node.js 模块（默认忽略）
      "coverage/**", // 测试覆盖率报告
      ".git/**", // Git 目录
      "*.min.js", // 压缩文件
      "vendor/**", // 第三方库目录
      "public/**", // 公共资源目录
    ],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ["@babel/preset-env"],
        },
      },
    },
  },
]);
