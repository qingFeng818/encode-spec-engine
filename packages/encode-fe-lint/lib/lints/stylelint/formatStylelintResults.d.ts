import { LintResult } from 'stylelint';
import type { ScanResult } from '../../types.js';
export declare function formatStylelintResults(results: LintResult[], quiet: boolean): ScanResult[];
