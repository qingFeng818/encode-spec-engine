import { init } from './src/index';

init({
  disableNpmInstall: false,
  enableESLint: true,
  enableStylelint: true,
  enableMarkdownlint: true,
  enablePrettier: true,
});
