import execa from 'execa';

const cmd = (c, args, showOutput = true) => {
  const proc = execa(c, args);
  if (showOutput) {
    proc.stdout.pipe(process.stdout);
  }
  return proc;
};

export default cmd;
