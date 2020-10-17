import project from './project';
import gpg from './gpg';
import secret from './secret';
import secrets from './secrets';

const run = async (name) => {
  try {
    await gpg.install();
    await secret.install();
    await secrets.install();
    await project.setup(name);
    await secret.setup();
    await secrets.setup();
    await project.commit();
  } catch (error) {
    console.log(error);
  }
};

export default run;
