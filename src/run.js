import gpg from './gpg';
import secret from './secret';
import secrets from './secrets';

const run = async () => {
  await gpg.install();
  await secret.install();
  await secrets.install();
};

export default run;
