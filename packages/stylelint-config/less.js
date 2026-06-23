export default {
  defaultSeverity: 'warning',
  plugins: ['stylelint-less'],
  extends: ['stylelint-config-standard'],
  rules: {
    // 禁用原生 at-rule 检查，使用 less 版本
    'at-rule-no-unknown': null,
    // 检查 Less at-rule（如 @mixin, @include, @extend, @import 等）
    'less/at-rule-no-unknown': true,

    // 禁止空块
    'block-no-empty': true,
    // 禁止无效的十六进制颜色
    'color-no-invalid-hex': true,
    // 禁止空注释
    'comment-no-empty': true,
    // 禁止声明块中重复的属性（允许连续重复但值不同，用于 CSS 层叠）
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    // 禁止简写属性覆盖之前的属性
    'declaration-block-no-shorthand-property-overrides': true,
    // 禁止 font-family 中重复的字体名称
    'font-family-no-duplicate-names': true,
    // calc() 函数中操作符必须有空格
    'function-calc-no-unspaced-operator': true,
    // 禁止非标准的 linear-gradient 方向
    'function-linear-gradient-no-nonstandard-direction': true,
    // 禁止 keyframe 声明中使用 !important
    'keyframe-declaration-no-important': true,
    // 禁止未知的媒体查询特性名称
    'media-feature-name-no-unknown': true,
    // 禁用选择器优先级降级检查（实际项目中常有意使用）
    'no-descending-specificity': null,
    // 禁止重复的 @import 规则
    'no-duplicate-at-import-rules': true,
    // 禁止重复的选择器
    'no-duplicate-selectors': true,
    // 允许空的样式文件（如占位文件）
    'no-empty-source': null,
    // 禁止无效的双斜杠注释（//）
    'no-invalid-double-slash-comments': true,
    // 禁止未知的属性名称
    'property-no-unknown': true,
    // 禁止未知的伪类选择器（允许 CSS Modules 的 global/local/export）
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local', 'export'],
      },
    ],
    // 禁止未知的伪元素选择器
    'selector-pseudo-element-no-unknown': true,
    // 禁止字符串中包含换行符
    'string-no-newline': true,
    // 禁止未知的单位（允许小程序单位 rpx）
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],

    // 缩进为 2 空格
    'indentation': 2,
    // 多行块结束大括号前必须换行
    'block-closing-brace-newline-before': 'always-multi-line',
    // 单行块结束大括号前必须有空格
    'block-closing-brace-space-before': 'always-single-line',
    // 多行块开始大括号后必须换行
    'block-opening-brace-newline-after': 'always-multi-line',
    // 块开始大括号前必须有空格
    'block-opening-brace-space-before': 'always',
    // 单行块开始大括号后必须有空格
    'block-opening-brace-space-after': 'always-single-line',
    // 十六进制颜色使用小写
    'color-hex-case': 'lower',
    // 十六进制颜色使用短格式（如 #fff 而非 #ffffff）
    'color-hex-length': 'short',
    // 注释内部前后必须有空格（如 /* comment */）
    'comment-whitespace-inside': 'always',
    // 声明冒号前不能有空格
    'declaration-colon-space-before': 'never',
    // 声明冒号后必须有空格
    'declaration-colon-space-after': 'always',
    // 单行声明块最多包含 1 个声明
    'declaration-block-single-line-max-declarations': 1,
    // 声明块末尾必须有分号
    'declaration-block-trailing-semicolon': 'always',
    // 长度为 0 时不使用单位（自定义属性除外）
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    // 单行最大长度为 100 字符
    'max-line-length': 100,
    // 禁止使用 ID 选择器
    'selector-max-id': 0,
    // 单行值列表中逗号后必须有空格
    'value-list-comma-space-after': 'always-single-line',

    // Less 变量冒号后必须有空格（如 @var: value）
    'less/at-variable-colon-space-after': 'always',
    // Less 变量冒号前不能有空格（如 @var: value）
    'less/at-variable-colon-space-before': 'never',
    // Less 混合调用后必须有分号（如 .mixin();）
    'less/at-mixin-call-semicolon': 'always',
    // Less 函数名后不能有空格（如 darken(@color, 10%)）
    'less/function-name-space-after': 'never',
    // Less 操作符必须有空格（如 @a + @b）
    'less/operator-space-after': 'always',
    'less/operator-space-before': 'always',
  },
};
