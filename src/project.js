import fs from 'fs';
import pkg from './pkg';
import cmd from './cmd';

const PKG_DIR = __dirname;
const setup = async (name) => {
  if (fs.existsSync(name)) {
    throw new Error('The directory exists.');
  }
  fs.mkdirSync(name);
  process.chdir(name);

  await cmd('git', ['init']);
  await cmd('npm', ['init', '-y']);
  await cmd('npm', ['install', '-D', 'husky', 'lint-staged']);

  const mods = [];
  mods.push({
    field: 'husky',
    value: {
      hooks: {
        'prepare-commit-msg':
          'git secrets --prepare_commit_msg_hook -- "$HUSKY_GIT_PARAMS"',
        'pre-commit': 'git secrets --pre_commit_hook && lint-staged',
        'commit-msg': 'git secrets --commit_msg_hook -- "$HUSKY_GIT_PARAMS"',
      },
    },
  });

  mods.push({
    field: 'lint-staged',
    value: {
      '*': [],
    },
  });

  pkg.mod(mods);
};

export default { setup };
