import { PKG, ScanOptions, Config } from '../../types.js';
export interface DoStyleLintOptions extends ScanOptions {
    pkg: PKG;
    config?: Config;
}
export declare function doStylelint(options: DoStyleLintOptions): Promise<import("../../types.js").ScanResult[]>;
