export default {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    // ===== Header 规则 =====
    // header 最大长度 100 字符
    'header-max-length': [2, 'always', 100],
    // header 最小长度 5 字符
    'header-min-length': [2, 'always', 5],

    // ===== Type 规则 =====
    // type 不能为空
    'type-empty': [2, 'never'],
    // type 必须小写
    'type-case': [2, 'always', 'lower-case'],
    // type 枚举值（标准 Conventional Commits）
    'type-enum': [
      2,
      'always',
      [
        'feat',      // 新功能
        'fix',       // 修复 bug
        'docs',      // 文档变更
        'style',     // 代码格式（不影响逻辑）
        'refactor',  // 重构（非 feat/fix）
        'perf',      // 性能优化
        'test',      // 测试相关
        'build',     // 构建系统/依赖
        'ci',        // CI 配置/脚本
        'chore',     // 其他维护性工作
        'revert',    // 回滚提交
      ],
    ],

    // ===== Scope 规则 =====
    // scope 允许为空
    'scope-empty': [0],
    // scope 必须小写
    'scope-case': [2, 'always', 'lower-case'],
    // scope 枚举值（可选，根据项目需要配置）
    'scope-enum': [0, 'always', []],

    // ===== Subject 规则 =====
    // subject 不能为空
    'subject-empty': [2, 'never'],
    // subject 结尾不能有句点
    'subject-full-stop': [2, 'never', '.'],
    // subject 不能以感叹号结尾（breaking changes 应使用 BREAKING CHANGE）
    'subject-exclamation-mark': [2, 'never'],
    // subject 大小写：不允许首字母大写、PascalCase、UPPER_CASE
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // subject 最大长度 100 字符
    'subject-max-length': [2, 'always', 100],
    // subject 最小长度 5 字符
    'subject-min-length': [2, 'always', 5],

    // ===== Body 规则 =====
    // body 可以为空
    'body-empty': [0],
    // body 开头空一行（warning）
    'body-leading-blank': [1, 'always'],
    // body 每行最大长度 100 字符
    'body-max-line-length': [2, 'always', 100],

    // ===== Footer 规则 =====
    // footer 可以为空
    'footer-empty': [0],
    // footer 开头空一行（warning）
    'footer-leading-blank': [1, 'always'],
    // footer 每行最大长度 100 字符
    'footer-max-line-length': [2, 'always', 100],

    // ===== 破坏性变更规则 =====
    // 破坏性变更必须在 footer 中声明 BREAKING CHANGE
    'body-case': [0],
    'footer-case': [0],
  },
};