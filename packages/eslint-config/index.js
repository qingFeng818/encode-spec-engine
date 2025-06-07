/*
 * @Author: qingfeng818 dduuyyuu@qq.com
 * @Date: 2025-06-07 11:34:46
 * @LastEditors: qingfeng818 dduuyyuu@qq.com
 * @LastEditTime: 2025-06-07 15:32:34
 * @FilePath: \encode-spec-engine\packages\eslint-config\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  extends: [
    './rules/base/best-practices',
    './rules/base/possible-errors',
    './rules/base/style',
    './rules/base/variables',
    './rules/base/es6',
    './rules/base/strict',
    './rules/imports',
    './rules/vue.js'
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
  root: true,
};
