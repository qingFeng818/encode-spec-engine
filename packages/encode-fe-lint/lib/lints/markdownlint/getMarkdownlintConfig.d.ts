import type { ScanOptions, PKG, Config } from '../../types.js';
import * as markdownlint from 'markdownlint';
type LintOptions = markdownlint.Options & {
    fix?: boolean;
};
export declare function getMarkdownlintConfig(opts: ScanOptions, pkg: PKG, config: Config): LintOptions;
export {};
