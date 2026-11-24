import path from 'path';
import fs from 'fs-extra';
import _ from 'lodash';
import { glob } from 'glob';
import ejs from 'ejs';
import {
  ESLINT_IGNORE_PATTERN,
  STYLELINT_FILE_EXT,
  STYLELINT_IGNORE_PATTERN,
  MARKDOWN_LINT_IGNORE_PATTERN,
} from './constants.js';

const mergeVSCodeConfig = (filepath: string, content: string) => {
  if (!fs.existsSync(filepath)) return content;
  try {
    const targetData = fs.readJSONSync(filepath);
    const sourceData = JSON.parse(content);
    return JSON.stringify(
      _.mergeWith(targetData, sourceData, (target, source) => {
        if (Array.isArray(target) && Array.isArray(source)) {
          return [...new Set(source.concat(target))];
        }
      }),
      null,
      2,
    );
  } catch (error) {
    return '';
  }
};

export default (cwd: string, data: Record<string, any>, vscode?: boolean) => {
  const templatePath = path.resolve(__dirname, '../config');
  const templates = glob.sync(`${vscode ? '_vscode' : '**'}/*.ejs`, {
    cwd: templatePath,
  });

  // 根据 ESLint 配置格式决定生成哪个配置文件
  const eslintConfigFormat = data.eslintConfigFormat || 'legacy';

  for (const name of templates) {
    // 根据配置格式过滤模板文件
    if (name.includes('eslintrc') && eslintConfigFormat === 'flat') {
      // 如果是 flat 格式，跳过传统的 eslintrc 模板
      continue;
    }
    if (name.includes('flat.config') && eslintConfigFormat === 'legacy') {
      // 如果是 legacy 格式，跳过 flat config 模板
      continue;
    }

    const filepath = path.resolve(
      cwd,
      name.replace(/\.ejs$/, '').replace(/^_/, '.'),
    );
    let content = ejs.render(
      fs.readFileSync(path.resolve(templatePath, name), 'utf8'),
      {
        eslintIgnores: ESLINT_IGNORE_PATTERN,
        stylelintExt: STYLELINT_FILE_EXT,
        stylelintIgnores: STYLELINT_IGNORE_PATTERN,
        markdownLintIgnores: MARKDOWN_LINT_IGNORE_PATTERN,
        ...data,
      },
    );
    if (/^_vscode/.test(name)) {
      content = mergeVSCodeConfig(filepath, content);
    }
    fs.outputFileSync(filepath, content, 'utf8');
  }
};
