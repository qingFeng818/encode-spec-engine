export default {
  // 预设的环境，使用这些环境中的全局变量不会被 no-undef 报错
  // @link https://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true, // 浏览器环境
    es6: true, // ES6 语法支持
    jasmine: true, // Jasmine 测试框架
    jest: true, // Jest 测试框架
    jquery: true, // jQuery 库
    mocha: true, // Mocha 测试框架
    node: true, // Node.js 环境
  },
  rules: {
    // ===== 变量声明规则 =====

    // 强制或禁止在变量声明时进行赋值
    // @reason 允许声明时赋值，如 const a = 1
    "init-declarations": "off",

    // ===== 变量使用规则 =====

    // 禁止 delete 变量
    // @reason delete 操作符只能用于删除对象属性，不能用于删除变量
    "no-delete-var": "error",

    // 禁止标签与变量同名
    // @reason 避免标签和变量名冲突，提高代码可读性
    "no-label-var": "error",

    // 禁用使用特定的全局变量
    // @reason 可用于禁用某些全局变量，如 event、name 等
    "no-restricted-globals": "off",

    // 禁止变量与外层作用域已存在的变量同名
    // @reason 避免变量遮蔽，防止意外修改外层变量
    "no-shadow": "error",

    // 禁止使用保留字命名变量
    // @reason 防止使用 JavaScript 保留字作为变量名，如 if、for、while 等
    // @note 在 ESLint v10.x 中，此规则默认会报告 globalThis
    "no-shadow-restricted-names": "error",

    // 禁止使用未声明的变量
    // @reason 确保所有变量都已声明，避免全局变量污染
    "no-undef": "error",

    // 不要将变量初始化成 undefined
    // @reason undefined 是默认值，显式初始化为 undefined 没有意义
    "no-undef-init": "error",

    // 禁止使用 undefined
    // @reason 允许使用 undefined，某些场景下需要判断变量是否为 undefined
    "no-undefined": "off",

    // 声明的变量必须被使用
    // @reason 避免未使用的变量，减少代码冗余
    // vars: 'all' - 检查所有变量
    // args: 'after-used' - 只检查最后一个参数之后的未使用参数
    // ignoreRestSiblings: true - 忽略解构中的剩余属性
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        caughtErrors: "all", // ESLint v10.x 默认值
      },
    ],

    // 不要在声明前就使用变量
    // @reason 函数声明会被提升，允许在声明前使用
    // functions: false - 允许在声明前使用函数
    // classes: false - 允许在声明前使用类（类不会被提升）
    // variables: false - 允许在声明前使用变量（变量声明会被提升）
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
  },
};
