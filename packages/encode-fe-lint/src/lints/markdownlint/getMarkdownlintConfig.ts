import path from 'path';
import { glob } from 'glob';
import { readConfig } from 'markdownlint/sync';
import type { ScanOptions, PKG, Config } from '../../types.js';
import * as markdownlint from 'markdownlint';

type LintOptions = markdownlint.Options & { fix?: boolean };

export function getMarkdownlintConfig(opts: ScanOptions, pkg: PKG, config: Config): LintOptions {
  const { cwd } = opts;
  const lintConfig: LintOptions = {
    fix: Boolean(opts.fix),
  };

  if (config.markdownlintOptions) {
    Object.assign(lintConfig, config.markdownlintOptions);
  } else {
    // 支持 .markdownlintrc 和 .markdownlint 系列配置文件
    const lintConfigFiles = glob.sync('.{markdownlintrc,markdownlint}{,.@(json,yaml,yml)}', {
      cwd,
    });
    if (lintConfigFiles.length > 0) {
      lintConfig.config = readConfig(path.resolve(cwd, lintConfigFiles[0]));
    }
  }

  return lintConfig;
}
