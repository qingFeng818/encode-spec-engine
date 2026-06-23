# Commitlint 配置规范说明

## Commit Message 格式

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 示例

```bash
# 简单提交
feat: 添加用户登录功能

# 带作用域的提交
fix(auth): 修复 token 过期问题

# 带详细说明的提交
feat(user): 添加用户注册功能

- 支持邮箱注册
- 支持手机号注册
- 添加邮箱验证码发送功能

BREAKING CHANGE: 移除旧的用户注册接口

# 回滚提交
revert: 回滚用户登录功能
```

## Type 类型说明

| Type | 说明 | 示例 |
|-----|------|------|
| `feat` | 新功能 | feat: 添加用户登录功能 |
| `fix` | 修复 bug | fix: 修复 token 过期问题 |
| `docs` | 文档变更 | docs: 更新 API 文档 |
| `style` | 代码格式（不影响逻辑） | style: 统一代码缩进 |
| `refactor` | 重构（非 feat/fix） | refactor: 重构用户模块 |
| `perf` | 性能优化 | perf: 优化图片加载性能 |
| `test` | 测试相关 | test: 添加用户模块测试 |
| `build` | 构建系统/依赖 | build: 升级 webpack 版本 |
| `ci` | CI 配置/脚本 | ci: 添加 GitHub Actions |
| `chore` | 其他维护性工作 | chore: 更新依赖包 |
| `revert` | 回滚提交 | revert: 回滚用户登录功能 |

## Scope 作用域说明

Scope 用于说明提交影响的模块或组件，可选。

### 常见 Scope

- `auth` - 认证授权
- `user` - 用户模块
- `api` - API 接口
- `ui` - 用户界面
- `config` - 配置文件
- `deps` - 依赖管理
- `db` - 数据库
- `server` - 服务器
- `client` - 客户端

## 规则说明

### Header 规则

| 规则 | 级别 | 说明 |
|-----|------|------|
| `header-max-length` | error | header 最大长度 100 字符 |
| `header-min-length` | error | header 最小长度 5 字符 |

### Type 规则

| 规则 | 级别 | 说明 |
|-----|------|------|
| `type-empty` | error | type 不能为空 |
| `type-case` | error | type 必须小写 |
| `type-enum` | error | type 必须在枚举值中 |

### Scope 规则

| 规则 | 级别 | 说明 |
|-----|------|------|
| `scope-empty` | off | scope 允许为空 |
| `scope-case` | error | scope 必须小写 |
| `scope-enum` | off | scope 枚举值（可选） |

### Subject 规则

| 规则 | 级别 | 说明 |
|-----|------|------|
| `subject-empty` | error | subject 不能为空 |
| `subject-full-stop` | error | subject 结尾不能有句点 |
| `subject-exclamation-mark` | error | subject 不能以感叹号结尾 |
| `subject-case` | error | subject 不允许首字母大写、PascalCase、UPPER_CASE |
| `subject-max-length` | error | subject 最大长度 100 字符 |
| `subject-min-length` | error | subject 最小长度 5 字符 |

### Body 规则

| 规则 | 级别 | 说明 |
|-----|------|------|
| `body-empty` | off | body 可以为空 |
| `body-leading-blank` | warning | body 开头空一行 |
| `body-max-line-length` | error | body 每行最大长度 100 字符 |

### Footer 规则

| 规则 | 级别 | 说明 |
|-----|------|------|
| `footer-empty` | off | footer 可以为空 |
| `footer-leading-blank` | warning | footer 开头空一行 |
| `footer-max-line-length` | error | footer 每行最大长度 100 字符 |

### 破坏性变更规则

| 规则 | 级别 | 说明 |
|-----|------|------|
| `body-case` | off | body 大小写检查 |
| `footer-case` | off | footer 大小写检查 |

## 破坏性变更

当提交包含破坏性变更时，必须在 footer 中声明 `BREAKING CHANGE`：

```bash
feat: 重构用户 API

BREAKING CHANGE: 移除旧的用户注册接口，新接口使用 OAuth2 认证
```

或者在 type 后添加 `!` 标记（本配置禁用此方式，推荐使用 BREAKING CHANGE）：

```bash
# ❌ 不推荐（本配置禁用）
feat!: 重构用户 API

# ✅ 推荐
feat: 重构用户 API

BREAKING CHANGE: 移除旧的用户注册接口
```

## 规则级别说明

- `0` - off：禁用规则
- `1` - warning：警告，不会阻止提交
- `2` - error：错误，会阻止提交

## 最佳实践

1. **使用简洁的 subject**：描述做了什么，而不是为什么做
2. **使用祈使句**：如 "添加" 而非 "添加了"
3. **不要以句点结尾**：subject 不需要句点
4. **保持一行 100 字符以内**：提高可读性
5. **body 和 footer 前空一行**：分隔不同部分
6. **破坏性变更使用 BREAKING CHANGE**：明确告知影响范围

## 常见错误示例

### ❌ 错误示例

```bash
# type 为空
: 添加用户登录功能

# type 大写
Feat: 添加用户登录功能

# subject 为空
feat():

# subject 以句点结尾
feat: 添加用户登录功能.

# subject 首字母大写
feat: 添加用户登录功能

# header 过长
feat: 这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的提交信息

# body 前没有空行
feat: 添加用户登录功能
添加了用户登录功能，支持邮箱和手机号登录
```

### ✅ 正确示例

```bash
# 简单提交
feat: 添加用户登录功能

# 带作用域的提交
fix(auth): 修复 token 过期问题

# 带详细说明的提交
feat(user): 添加用户注册功能

添加了用户注册功能，支持以下方式：
- 邮箱注册
- 手机号注册
- 添加邮箱验证码发送功能

BREAKING CHANGE: 移除旧的用户注册接口

# 回滚提交
revert: 回滚用户登录功能
```

## 使用方法

在项目根目录创建 `commitlint.config.js` 文件：

```javascript
export default {
  extends: ['encode-commitlint-config']
};
```

或直接复制本配置文件内容到 `commitlint.config.js` 中。