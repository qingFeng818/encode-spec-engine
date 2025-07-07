import { ESLint } from 'eslint';
import fg from 'fast-glob';
import { extname, join } from 'path';
import { Config, PKG, ScanOptions } from '../../types';
import { ESLINT_FILE_EXT, ESLINT_IGNORE_PATTERN } from '../../utils/constants';
import { formatESLintResults } from './formatESLintResults';
import { getESLintConfig } from './getESLintConfig';

export interface DoESLintOptions extends ScanOptions {
  pkg: PKG;
  config?: Config;
}

export async function doESLint(options: DoESLintOptions) {
  let files: string[];
  if (options.files) {
    files = options.files.filter((name) => ESLINT_FILE_EXT.includes(extname(name)));
  } else {
    files = await fg(`**/*.{${ESLINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`, {
      cwd: options.cwd,
      ignore: ESLINT_IGNORE_PATTERN,
    });
  }
  console.log(files, typeof files, 'files');
  // console.log(options, 'options');
  console.log(getESLintConfig(options, options.pkg, options.config), 'config');
  const eslint = new ESLint(getESLintConfig(options, options.pkg, options.config));
  console.log(eslint, 'eslint22');
  const reports = await eslint.lintFiles(files);
  console.log(reports, 'reports');
  const rulesMeta = eslint.getRulesMetaForResults(reports);
  console.log(rulesMeta, 'rulesMeta');
  if (options.fix) await ESLint.outputFixes(reports);
  console.log(reports, 'reports1');
  return formatESLintResults(reports, options.quiet, eslint);
}
