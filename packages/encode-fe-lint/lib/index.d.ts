import type { InitOptions } from './types.js';
type IInitOptions = Omit<InitOptions, 'checkVersionUpdate'>;
export declare const init: (options: IInitOptions) => Promise<void>;
export {};
