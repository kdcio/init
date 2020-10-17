import { sync as commandExistsSync } from 'command-exists';

const exists = (cmd) => {
  return commandExistsSync(cmd);
};

export default exists;
