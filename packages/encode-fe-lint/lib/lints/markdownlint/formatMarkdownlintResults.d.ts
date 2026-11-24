import * as markdownlint from 'markdownlint';
import type { ScanResult } from '../../types.js';
export declare function formatMarkdownlintResults(results: markdownlint.LintResults, quiet: boolean): ScanResult[];
