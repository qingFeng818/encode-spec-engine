import fs from 'fs-extra';
import path from 'path';
import { doESLint, doMarkdownlint, doPrettier, doStylelint } from '../lints/index.js';
import type { Config, PKG, ScanOptions, ScanReport, ScanResult } from '../types.js';
import { PKG_NAME } from '../utils/constants.js';

export default async (options: ScanOptions): Promise<ScanReport> => {
  const { cwd, fix, outputReport, config: scanConfig } = options;

  const readConfigFile = async (pth: string): Promise<any> => {
    const locaPath = path.resolve(cwd, pth);
    if (!fs.existsSync(locaPath)) return {};
    const config = await import(locaPath);
    return config.default || config;
  };

  const pkg: PKG = JSON.parse(await fs.readFile(path.resolve(cwd, 'package.json'), 'utf8'));
  const config: Config = scanConfig || (await readConfigFile(`${PKG_NAME}.config.js`));
  const runErrors: Error[] = [];
  let results: ScanResult[] = [];

  if (fix && config.enablePrettier !== false) {
    await doPrettier(options);
  }

  if (config.enableESLint !== false) {
    try {
      const eslintResults = await doESLint({ ...options, pkg, config });
      results = results.concat(eslintResults);
    } catch (error) {
      runErrors.push(error as Error);
    }
  }

  if (config.enableStylelint !== false) {
    try {
      const stylelintResults = await doStylelint({ ...options, pkg, config });
      results = results.concat(stylelintResults);
    } catch (error) {
      runErrors.push(error as Error);
    }
  }

  if (config.enableMarkdownlint !== false) {
    try {
      const markdownlintResults = await doMarkdownlint({ ...options, pkg, config });
      results = results.concat(markdownlintResults);
    } catch (e) {
      runErrors.push(e as Error);
    }
  }

  if (outputReport) {
    const reportPath = path.resolve(process.cwd(), `${PKG_NAME}.report.json`);
    await fs.outputFile(reportPath, JSON.stringify(results, null, 2));
  }

  return {
    results,
    errorCount: results.reduce((count, { errorCount }) => count + errorCount, 0),
    warningCount: results.reduce((count, { warningCount }) => count + warningCount, 0),
    runErrors,
  };
};
