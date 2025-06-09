import { ESLint } from 'eslint';
import type { Config, PKG, ScanOptions } from '../../types';
export declare function getESLintConfig(opts: ScanOptions, pkg: PKG, config: Config): ESLint.Options;
