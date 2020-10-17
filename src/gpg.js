import exists from './exists';

const CMD = 'gpg';

const install = () => {
  if (!exists(CMD)) {
    console.log('install gpg');
  } else {
    console.log('gpg exists');
  }
};

export default install;
