import { ScanOptions } from '../../types';
export interface DoPrettierOptions extends ScanOptions {
}
export declare function doPrettier(options: DoPrettierOptions): Promise<void>;
