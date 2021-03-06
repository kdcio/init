// Prevents you from committing passwords and other sensitive information
import cmd from './cmd';

/**
 * brew install git-secrets
 */
const install = async () => {
  try {
    await cmd('brew', ['list', 'git-secrets'], false);
    console.log('git-secrets already installed');
  } catch (error) {
    await cmd('brew', ['install', 'git-secrets']);
  }
};

/**
 * git secrets --install
 * git secrets --register-aws
 * add hooks
 */
const setup = async () => {
  // Use husky to trigger
  // await cmd('git', ['secrets', '--install']);
  await cmd('git', ['secrets', '--register-aws']);
};

export default { install, setup };
