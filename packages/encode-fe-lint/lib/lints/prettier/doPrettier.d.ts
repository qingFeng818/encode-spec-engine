import { ScanOptions } from '../../types.js';
export interface DoPrettierOptions extends ScanOptions {
}
export declare function doPrettier(options: DoPrettierOptions): Promise<void>;
