export default {
  extends: ["./index.js", "./rules/react.js"],
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
};
