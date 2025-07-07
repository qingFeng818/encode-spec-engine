#!/usr/bin/env node
import path from 'path';
import fs from 'fs-extra';
import ora from 'ora';
import glob from 'glob';
import { execSync } from 'child_process';
import scan from './actions/scan';
import update from './actions/update';
import log from './utils/log';
import printReport from './utils/print-report';
import { getCommitFiles, getAmendFiles } from './utils/git';
import npmType from './utils/npm-type';
import { program } from 'commander';
import spawn from 'cross-spawn';
import init from './actions/init';
import generateTemplate from './utils/generate-template';
import { PKG_NAME, PKG_VERSION } from './utils/constants';

const cwd = process.cwd();

/**
 * 若无node_modules目录，则帮用户install
 */
const installDepsIfThereNo = async () => {
  const lintConfigFiles = [].concat(
    glob.sync('.eslintrc?(.@(js|ymal|yml|json))', { cwd }),
    glob.sync('.stylelintrc?(.@(js|ymal|yml|json))', { cwd }),
    glob.sync('.markdownlint(.@(yaml|yml|json))', { cwd }),
  );
  const nodeModulesPath = path.resolve(cwd, 'node_modules');
  if (!fs.existsSync(nodeModulesPath) && lintConfigFiles.length > 0) {
    const npm = await npmType;
    log.info(`使用项目 lint 配置，检测到项目未安装依赖，将进行安装执行 ${npm} install`);
    execSync(`cd ${cwd} && ${npm} install`);
  }
};

program.version(PKG_VERSION)
  .description(`${PKG_NAME} 是前端编码规范工程化的配套Lint工具,提供见到那的CLI和Node.js API,
  让项目能够一键接入，一键扫描，一键修复，一键升级，并为项目配置git commit 卡点，降低项目实施规约成本`);

program
  .command('init')
  .description('一键接入, 为项目初始化规约工具和配置，可以根据项目类型和需求进行定制')
  .option('--vscode', '写入.vscode/settings.json配置')
  .action(async (cmd) => {
    if (cmd.vscode) {
      const configPath = path.resolve(cwd, `${PKG_NAME}.config.js`);
      generateTemplate(cwd, require(configPath), true);
    } else await init({ cwd, checkVersionUpdate: true });
  });

program
  .command('scan')
  .description('一键扫描, 对项目进行代码规范问题扫描')
  .option('-q, --quiet', '仅报告错误信息, - 默认:false')
  .option('-o --output-report', '输出扫面出的规范问题日志')
  .option('-i, --include <dirpath>', '指定要进行规范扫描的目录')
  .option('--no-ignore', '忽略 eslint 的 ignore 配置文件和 ignore 规则')
  .action(async (cmd) => {
    console.log(22222, 'test');
    await installDepsIfThereNo();
    const checking = ora();
    checking.start(`执行 ${PKG_NAME} 3333代码检查`);
    const { results, errorCount, warningCount, runErrors } = await scan({
      cwd,
      fix: false,
      include: cmd.include || cwd,
      quiet: Boolean(cmd.quiet),
      outputReport: Boolean(cmd.outputReport),
      ignore: cmd.ignore,
    });

    let type = 'success';
    if (runErrors.length > 0 || errorCount > 0) {
      type = 'fail';
    } else if (warningCount > 0) {
      type = 'warn';
    }
    checking[type]();
    if (results.length > 0) printReport(results, false);
    runErrors.forEach((e) => console.log(e));
  });

program
  .command('commit-msg-scan')
  .description('commit message 检查: git commit 是对 commit message 进行规范检查')
  .action(async () => {
    await installDepsIfThereNo();
    const result = spawn.sync('commitlint', ['-E', 'HUSKY_GIT_PARAMS'], { stdio: 'inherit' });
    if (result.status !== 0) process.exit(result.status);
  });

program
  .command('commit-file-scan')
  .description('代码提交检查: git commit 时对提交代码进行规范问题扫描')
  .option('-s --strict', '严格模式, 对warn 和 error 问题都卡口， 默认仅对 error 问题卡口')
  .action(async (cmd) => {
    await installDepsIfThereNo();

    const files = await getAmendFiles();
    if (files) log.warn(`[${PKG_NAME} changes not staged for commit : \n${files}]`);
    const checking = ora();
    checking.start(`执行 ${PKG_NAME} 代码提交检查`);
    const { results, errorCount, warningCount, runErrors } = await scan({
      cwd,
      include: cwd,
      quiet: !cmd.strict,
      files: await getCommitFiles(),
    });
    if (errorCount > 0 || (cmd.strict && warningCount > 0)) {
      checking.fail();
      printReport(results, false);
      process.exitCode = 1;
    } else {
      checking.succeed();
    }
  });

program
  .command('fix')
  .description('一键修复, 自动修复项目的代码规范扫描问题')
  .option('-i,--include <dirpath>', '指定要进行规范扫描的目录')
  .option('--no-ignore', '忽略 eslint 的 ignore 配置文件和 ignore 规则')
  .action(async (cmd) => {
    await installDepsIfThereNo();
    const checking = ora();
    checking.start(`执行 ${PKG_NAME} 代码修复`);
    const { results } = await scan({
      cwd,
      fix: true,
      include: cmd.include || cwd,
      ignore: cmd.ignore,
      outputReport: true,
    });
    console.log(results, 'end?');
    checking.succeed();
    if (results.length > 0) printReport(results, true);
  });

program
  .command('update')
  .description(`更新 ${PKG_NAME} 至最新版本`)
  .action(() => update(true));

program.parse(process.argv);
