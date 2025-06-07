/*
 * @Author: qingfeng818 dduuyyuu@qq.com
 * @Date: 2025-06-07 19:31:22
 * @LastEditors: qingfeng818 dduuyyuu@qq.com
 * @LastEditTime: 2025-06-07 20:04:50
 * @FilePath: \encode-spec-engine\packages\eslint-plugin\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
const requireAll = require('require-all');

const rules = requireAll({
  dirname: path.resolve(__dirname, 'rules'),
});

console.log(rules);
const configs = requireAll({
  dirname: path.resolve(__dirname, 'configs'),
});
console.log(configs);
const processors = {
  '.json': {
    preprocess(test) {
      return [`module.exports = ${test}`];
    },
  },
};

module.exports = {
  rules,
  configs,
  processors,
};
