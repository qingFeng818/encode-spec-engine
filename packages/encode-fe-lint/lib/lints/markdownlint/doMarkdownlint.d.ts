import { Config, PKG, ScanOptions } from '../../types.js';
export interface DoMarkdownlintOptions extends ScanOptions {
    pkg: PKG;
    config?: Config;
}
export declare function doMarkdownlint(options: DoMarkdownlintOptions): Promise<import("../../types.js").ScanResult[]>;
