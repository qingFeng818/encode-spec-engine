import path from 'path';
import { glob } from 'glob';
import { readConfig } from 'markdownlint/sync';
export function getMarkdownlintConfig(opts, pkg, config) {
    const { cwd } = opts;
    const lintConfig = {
        fix: Boolean(opts.fix),
    };
    if (config.markdownlintOptions) {
        Object.assign(lintConfig, config.markdownlintOptions);
    }
    else {
        const lintConfigFiles = glob.sync('.{markdownlintrc,markdownlint}{,.@(json,yaml,yml)}', {
            cwd,
        });
        if (lintConfigFiles.length > 0) {
            lintConfig.config = readConfig(path.resolve(cwd, lintConfigFiles[0]));
        }
    }
    return lintConfig;
}
