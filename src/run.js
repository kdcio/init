import project from './project';
import gpg from './gpg';
import secret from './secret';
import secrets from './secrets';

const run = async (name) => {
  await gpg.install();
  await secret.install();
  await secrets.install();
  await project.setup(name);
};

export default run;
