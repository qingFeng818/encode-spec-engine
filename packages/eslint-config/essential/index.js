/**
 * essential 级别出口文件仅将会必要的规则设置为 error 级别
 */

export default {
  extends: [
    "../index.js",
    "./rules/set-style-to-warn.js",
    "./rules/blacklist.js",
    "./rules/es6-blacklist.js",
  ],
};
