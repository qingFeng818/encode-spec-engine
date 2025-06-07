/*
 * @Author: qingfeng818 dduuyyuu@qq.com
 * @Date: 2025-06-06 11:34:03
 * @LastEditors: qingfeng818 dduuyyuu@qq.com
 * @LastEditTime: 2025-06-07 15:38:42
 * @FilePath: \encode-spec-engine\packages\commitlint-config\__tests__\commitlint-config.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

const commitlintConfig = require('../index');
const assert = require('assert').strict;

assert.strictEqual(commitlintConfig(), 'Hello from commitlintConfig');
console.info('commitlintConfig tests passed');
