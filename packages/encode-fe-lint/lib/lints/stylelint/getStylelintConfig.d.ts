import { LinterOptions } from 'stylelint';
import type { Config, PKG, ScanOptions } from '../../types.js';
export declare function getStylelintConfig(opts: ScanOptions, pkg: PKG, config: Config): LinterOptions;
