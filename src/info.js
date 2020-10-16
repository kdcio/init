import cmd from './cmd';

const info = async () => {
  await cmd('npx', ['envinfo']);
};

export default info;
