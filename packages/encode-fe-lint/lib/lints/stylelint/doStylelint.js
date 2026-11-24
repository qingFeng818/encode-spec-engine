import fg from 'fast-glob';
import { extname, join } from 'path';
import stylelint from 'stylelint';
import { STYLELINT_FILE_EXT, STYLELINT_IGNORE_PATTERN } from '../../utils/constants.js';
import { formatStylelintResults } from './formatStylelintResults.js';
import { getStylelintConfig } from './getStylelintConfig.js';
export async function doStylelint(options) {
    let files;
    if (options.files) {
        files = options.files.filter((name) => STYLELINT_FILE_EXT.includes(extname(name)));
    }
    else {
        const pattern = join(options.include, `**/*.{${STYLELINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`);
        files = await fg(pattern, {
            cwd: options.cwd,
            ignore: STYLELINT_IGNORE_PATTERN,
        });
    }
    if (files.length === 0) {
        return [];
    }
    const data = await stylelint.lint({
        ...getStylelintConfig(options, options.pkg, options.config),
        files,
    });
    return formatStylelintResults(data.results, options.quiet);
}
