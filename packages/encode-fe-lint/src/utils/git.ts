import { execa, type Options } from 'execa';

export const getCommitFiles = async (options: Options = {}): Promise<string[]> => {
  try {
    const { stdout } = await execa(
      'git',
      ['diff', '--staged', '--diff-filter=ACMR', '--name-only', '--ignore-submodules'],
      {
        ...options,
        all: true,
        cwd: options.cwd || process.cwd(),
      },
    );

    return typeof stdout === 'string' ? stdout.split(/\s/).filter(Boolean) : [];
  } catch {
    return [];
  }
};

export const getAmendFiles = async (options: Options = {}): Promise<string> => {
  try {
    const { stdout } = await execa('git', ['diff', '--name-only'], {
      ...options,
      all: true,
      cwd: options.cwd || process.cwd(),
    });

    return typeof stdout === 'string' ? stdout : '';
  } catch {
    return '';
  }
};
