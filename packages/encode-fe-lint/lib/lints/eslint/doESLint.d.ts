import { Config, PKG, ScanOptions } from '../../types.js';
export interface DoESLintOptions extends ScanOptions {
    pkg: PKG;
    config?: Config;
}
export declare function doESLint(options: DoESLintOptions): Promise<import("../../types.js").ScanResult[]>;
