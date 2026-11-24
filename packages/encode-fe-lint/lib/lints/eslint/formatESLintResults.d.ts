import { ESLint } from 'eslint';
import type { ScanResult } from '../../types.js';
export declare function formatESLintResults(results: ESLint.LintResult[], quiet: boolean, eslint: ESLint): ScanResult[];
