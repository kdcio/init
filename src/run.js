import gpg from './gpg';
import secrets from './secrets';

const run = async () => {
  await gpg.install();
  await secrets.install();
};

export default run;
