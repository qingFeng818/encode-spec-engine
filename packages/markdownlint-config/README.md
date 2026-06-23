# Markdownlint 配置规范说明

## 配置文件说明

本配置文件定义了 Markdown 文档的规范检查规则，确保文档格式统一、可读性强。

## 规则说明

### 基础配置

| 规则 | 配置 | 说明 |
|-----|------|------|
| `default` | `true` | 默认启用所有未明确禁用的规则 |

### 标题规则

| 规则 | 配置 | 说明 |
|-----|------|------|
| `MD001` | `true` | 标题层级应逐级递增，不能跳级 |
| `MD002` | `true` | 第一个标题应为 H1（#） |
| `MD003` | `style: "atx"` | 标题风格统一使用 atx 格式（# Title）而非 setext 格式（Title\n===） |
| `MD004` | `style: "dash"` | 无序列表使用短横线（-）而非星号（*）或加号（+） |
| `MD005` | `true` | 同级列表项缩进应一致 |
| `MD006` | `true` | 列表项缩进应为 2 个空格 |
| `MD007` | `indent: 2` | 列表项缩进 2 个空格 |
| `MD024` | `siblings_only: false` | 不允许重复的标题 |
| `MD025` | `level: 1` | 标题前后应有空行（H1 除外） |
| `MD026` | `punctuation: ".,;!?"` | 标题末尾不能有标点符号 |
| `MD043` | `false` | 允许自定义标题层级结构 |
| `MD045` | `true` | 图片和链接应使用替代文本 |

### 间距规则

| 规则 | 配置 | 说明 |
|-----|------|------|
| `MD009` | `br_spaces: 0` | 行尾不能有空格 |
| `MD010` | `true` | 不能使用硬制表符（Tab） |
| `MD012` | `maximum: 1` | 连续空行不能超过 1 行 |
| `MD027` | `true` | 引用块符号（>）后应有空格 |
| `MD028` | `true` | 引用块前后应有空行 |
| `MD030` | `ul_single: 1` | 列表符号后应有 1 个空格 |
| `MD031` | `list_items: true` | 列表项应缩进 |
| `MD032` | `true` | 列表应为连续的，中间不应有空行 |

### 格式规则

| 规则 | 配置 | 说明 |
|-----|------|------|
| `MD011` | `true` | 反引号应成对出现 |
| `MD014` | `true` | 代码块中的美元符号（$）应转义 |
| `MD018` | `true` | 无序列表前应有空行 |
| `MD019` | `true` | 有序列表前应有空行 |
| `MD020` | `true` | 代码块前应有空行 |
| `MD021` | `true` | 代码块后应有空行 |
| `MD022` | `true` | 标题前应有空行 |
| `MD023` | `true` | 标题后应有空行 |
| `MD029` | `style: "ordered"` | 有序列表使用数字序号 |
| `MD033` | `false` | 允许内联 HTML |
| `MD034` | `true` | 代码块中不应使用裸 URL |
| `MD035` | `style: "---"` | 水平线使用三个短横线（---） |
| `MD036` | `true` | 不应使用强调代替标题 |
| `MD037` | `true` | 不应使用裸 URL |
| `MD038` | `true` | 代码块中不应有空行 |
| `MD039` | `true` | 代码块中不应有空格 |
| `MD041` | `false` | 允许第一行不是 H1 |
| `MD042` | `false` | 允许空链接 |
| `MD046` | `style: "fenced"` | 代码块使用围栏格式（```）而非缩进格式 |
| `MD047` | `true` | 代码块应使用围栏格式（```） |
| `MD048` | `true` | 代码块围栏应使用反引号（```）而非波浪线（~~~） |
| `MD049` | `style: "consistent"` | 代码块围栏风格应一致 |
| `MD050` | `style: "consistent"` | 强调符号应一致（* 或 **） |
| `MD051` | `true` | 链接和图片应使用尖括号包裹 URL |
| `MD052` | `true` | 链接和图片 URL 应使用尖括号包裹 |
| `MD053` | `code_blocks: false` | 不检查代码块中的链接和图片 |

### 代码块规则

| 规则 | 配置 | 说明 |
|-----|------|------|
| `MD040` | `allowed_languages: [...]` | 允许的代码块语言列表 |
| `MD040` | `language_only: false` | 允许代码块不指定语言 |

### 专有名词规则

| 规则 | 配置 | 说明 |
|-----|------|------|
| `MD044` | `names: [...]` | 专有名词列表，应保持大小写一致 |
| `MD044` | `code_blocks: false` | 不检查代码块中的专有名词 |

### 禁用的规则

| 规则 | 原因 |
|-----|------|
| `MD013` | 行长度限制禁用，避免对长 URL 或代码块造成限制 |
| `MD033` | 允许内联 HTML，用于复杂格式 |
| `MD041` | 允许第一行不是 H1，适用于某些文档格式 |
| `MD042` | 允许空链接，用于占位符 |
| `MD043` | 允许自定义标题层级结构 |

## 专有名词列表

配置中定义的专有名词包括：

- **编程语言**: JavaScript, HTML, CSS, AJAX, JSON, PHP, Java, Python
- **Web 技术**: DOM, BOM, HTTP, HTTPS, WebSocket, ECMAScript, ES6, ES2015
- **前端框架**: jQuery, React, React Native, Bootstrap
- **构建工具**: Gulp, Grunt, webpack, Yeoman, npm, Babel
- **测试框架**: Mocha, Jasmine
- **数据库**: MySQL, MongoDB, Redis
- **服务器**: Apache, Nginx, NGINX
- **版本控制**: GitHub, GitLab
- **浏览器**: Chrome, Firefox, Safari, IE, Opera
- **操作系统**: Android, iOS, Windows, OS X, Ubuntu, Linux, Debian
- **设备**: PC, Mobile, H5, MacBook, iPad, iPhone, Apple Watch
- **公司**: Alibaba, Google, Apple, Microsoft, Yahoo
- **其他**: FPS, UI, URL, URI, URLs, URIs, Visual Studio Code

## 代码块支持的语言

支持以下代码块语言：

- **JavaScript**: javascript, js, jsx, ts, tsx, typescript
- **样式**: css, scss, less
- **标记**: html, xml, markdown, md
- **配置**: json, yaml, yml, conf, nginx
- **脚本**: bash, sh, shell, python, py, java, php, sql
- **其他**: dockerfile, docker, vim, viml

## 使用方法

在项目根目录创建 `.markdownlint.json` 文件：

```json
{
  "extends": "encode-markdownlint-config"
}
```

或直接复制本配置文件内容到 `.markdownlint.json` 中。