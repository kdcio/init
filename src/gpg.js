import cmd from './cmd';

const install = async () => {
  try {
    await cmd('brew', ['list', 'gpg'], false);
    console.log('gpg already installed');
  } catch (error) {
    console.log('Installing gpg...');
    await cmd('brew', ['install', 'gpg']);
  }
};

export default { install };
