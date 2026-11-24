export default {
  extends: [
    "../es5.js",
    "./rules/set-style-to-warn.js",
    "./rules/blacklist.js",
  ],
  rules: {
    // 逗号风格 - ES5 中不加最后一个逗号
    // @unessential
    "comma-dangle": ["warn", "never"],
  },
};
