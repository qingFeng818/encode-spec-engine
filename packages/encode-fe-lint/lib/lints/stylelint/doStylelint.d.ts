import { PKG, ScanOptions } from '../../types';
export interface DoStyleLintOptions extends ScanOptions {
    pkg: PKG;
}
export declare function doStylelint(options: DoStyleLintOptions): Promise<import("../../types").ScanResult[]>;
