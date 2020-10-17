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
};

export default { setup };
