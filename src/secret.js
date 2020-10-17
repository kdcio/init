// Encrypt files that containt passwords and other sensitive information
import cmd from './cmd';

/**
 * brew install git-secret
 */
const install = async () => {
  try {
    await cmd('brew', ['list', 'git-secret'], false);
    console.log('git-secret already installed');
  } catch (error) {
    await cmd('brew', ['install', 'git-secret']);
  }
};

/**
 * git secret init
 * See README.md on how to use
 */
const setup = async () => {
  await cmd('git', ['secret', 'init']);
  console.log('Visit https://git-secret.io/ for more info.');
};

export default { install, setup };
