import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import * as markdownlint from 'markdownlint';
import { lint } from 'markdownlint/promise';
import { extname, join } from 'path';
import { Config, PKG, ScanOptions } from '../../types.js';
import { MARKDOWN_LINT_FILE_EXT, MARKDOWN_LINT_IGNORE_PATTERN } from '../../utils/constants.js';
import { formatMarkdownlintResults } from './formatMarkdownlintResults.js';
import { getMarkdownlintConfig } from './getMarkdownlintConfig.js';

export interface DoMarkdownlintOptions extends ScanOptions {
  pkg: PKG;
  config?: Config;
}

export async function doMarkdownlint(options: DoMarkdownlintOptions) {
  let files: string[];

  if (options.files) {
    files = options.files.filter((name) => MARKDOWN_LINT_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = join(
      options.include,
      `**/*.{${MARKDOWN_LINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: MARKDOWN_LINT_IGNORE_PATTERN,
    });
  }

  if (files.length === 0) {
    return formatMarkdownlintResults({}, options.quiet);
  }

  const results = await lint({
    ...getMarkdownlintConfig(options, options.pkg, options.config),
    files,
  });

  if (options.fix) {
    for (const filename of Object.keys(results)) {
      await formatMarkdownFile(filename, results[filename]);
    }
  }

  return formatMarkdownlintResults(results, options.quiet);
}

async function formatMarkdownFile(filename: string, errors: any[]) {
  const fixes = errors?.filter((error: any) => error.fixInfo);

  if (fixes?.length > 0) {
    const originalText = await readFile(filename, 'utf8');
    const fixedText = markdownlint.applyFixes(originalText, fixes);
    if (originalText !== fixedText) {
      await writeFile(filename, fixedText, 'utf8');
      return errors.filter((error: any) => !error.fixInfo);
    }
  }
  return errors;
}
