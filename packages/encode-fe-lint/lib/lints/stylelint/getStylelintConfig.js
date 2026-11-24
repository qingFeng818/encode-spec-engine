import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';
import { STYLELINT_IGNORE_PATTERN } from '../../utils/constants.js';
let stylelintFile = '{stylelint.config.js,stylelint.config.cjs,stylelint.config.mjs,.stylelintrc.js,.stylelintrc.cjs,.stylelintrc.yaml,.stylelintrc.yml,.stylelintrc.json}';
export function getStylelintConfig(opts, pkg, config) {
    const { cwd, fix, ignore } = opts;
    if (config.enableStylelint === false)
        return {};
    const lintConfig = {
        fix: Boolean(fix),
        allowEmptyInput: true,
        disableDefaultIgnores: Boolean(ignore) === false,
    };
    if (config.stylelintOptions) {
        Object.assign(lintConfig, config.stylelintOptions);
    }
    else {
        const lintConfigFiles = glob.sync(stylelintFile, { cwd });
        if (lintConfigFiles.length === 0 && !pkg.stylelint) {
            lintConfig.config = { extends: 'stylelint-config-standard' };
        }
        const ignoreFilePath = path.resolve(cwd, '.stylelintignore');
        if (!fs.existsSync(ignoreFilePath)) {
            lintConfig.globbyOptions = {
                cwd,
                ignore: STYLELINT_IGNORE_PATTERN,
            };
        }
    }
    return lintConfig;
}
