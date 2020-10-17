import exists from './exists';
import cmd from './cmd';

const CMD = 'gpg';

const install = async () => {
  if (exists(CMD)) {
    console.log('gpg already installed');
    return;
  }

  console.log('Installing gpg...');
  await cmd('brew', ['install', 'gpg']);
};

export default install;
