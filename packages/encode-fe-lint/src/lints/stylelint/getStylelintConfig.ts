import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';

import { LinterOptions } from 'stylelint';
import type { Config, PKG, ScanOptions } from '../../types.js';
import { STYLELINT_IGNORE_PATTERN } from '../../utils/constants.js';

let stylelintFile =
  '{stylelint.config.js,stylelint.config.cjs,stylelint.config.mjs,.stylelintrc.js,.stylelintrc.cjs,.stylelintrc.yaml,.stylelintrc.yml,.stylelintrc.json}';

export function getStylelintConfig(opts: ScanOptions, pkg: PKG, config: Config): LinterOptions {
  const { cwd, fix, ignore } = opts;
  if (config.enableStylelint === false) return {} as any;

  const lintConfig: any = {
    fix: Boolean(fix),
    allowEmptyInput: true,
    disableDefaultIgnores: Boolean(ignore) === false,
  };
  if (config.stylelintOptions) {
    Object.assign(lintConfig, config.stylelintOptions);
  } else {
    const lintConfigFiles = glob.sync(stylelintFile, { cwd });
    if (lintConfigFiles.length === 0 && !pkg.stylelint) {
      lintConfig.config = { extends: 'stylelint-config-standard' };
    }

    const ignoreFilePath = path.resolve(cwd, '.stylelintignore');
    if (!fs.existsSync(ignoreFilePath)) {
      lintConfig.globbyOptions = {
        cwd,
        ignore: STYLELINT_IGNORE_PATTERN,
      };
    }
  }
  return lintConfig;
}
