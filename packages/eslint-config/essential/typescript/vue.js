export default {
  extends: [
    "./index.js",
    "../../rules/vue.js", // vue 要置于最后，因为里面用了 vue-parser
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
