export default {
  extends: ["./index.js", "./rules/vue.js"],
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
    parser: "@babel/eslint-parser",
  },
};
