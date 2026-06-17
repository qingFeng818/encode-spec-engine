import { ESLint } from 'eslint';
import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';
import type { Config, PKG, ScanOptions } from '../../types.js';
import { getESLintConfigType } from './getESLintConfigType.js';
import prettier from 'prettier';

export function getESLintConfig(opts: ScanOptions, pkg: PKG, config: Config): ESLint.Options {
  const { cwd, fix, ignore, cache } = opts;
  const lintConfig: ESLint.Options = {
    cwd,
    fix,
    ignore,
    cache,
    errorOnUnmatchedPattern: false,
  };

  if (config.eslintOptions) {
    Object.assign(lintConfig, config.eslintOptions);
  } else {
    const lintConfigFiles = glob.sync('.eslintrc?(.@(js|cjs|yaml|yml|json))', { cwd });
    const getIgnorePatterns = () => {
      const ignoreFilePath = path.resolve(__dirname, '../config/_eslintignore.ejs');
      const fileContent = fs.readFileSync(ignoreFilePath, 'utf8');
      const ignorePatterns = fileContent
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'));
      return ignorePatterns;
    };
    if (lintConfigFiles.length === 0 && !pkg.eslintConfig) {
      lintConfig.overrideConfig = [
        {
          files: ['**/*.{js,jsx,ts,tsx}'],
          languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
              window: 'readonly',
              document: 'readonly',
            },
          },
          ignores: getIgnorePatterns(),
          ...(config.enablePrettier ? prettier : {}),
        },
      ];
    }

    const lintIgnoreFile = path.resolve(cwd, '.eslintignore');
    if (!fs.existsSync(lintIgnoreFile) && !pkg.eslintIgnore) {
      lintConfig.ignorePatterns = getIgnorePatterns();
    }
  }
  return lintConfig;
}
