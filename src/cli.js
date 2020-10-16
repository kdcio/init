import { program } from 'commander';
import packageJson from '../package.json';
const { log } = console;

export const start = ({ info }) => {
  program
    .version(packageJson.version)
    .name(`npx ${packageJson.name}`)
    .usage('package-name')
    .arguments('[package-name]')
    .option('-i, --info', 'print environment debug info')
    .action((name) => {
      packageName = name;
    })
    .on('--help', () => {
      log('');
      log('Example:');
      log(`  ${program.name()} project-name`);
    })
    .parse(process.argv);

  if (program.info) {
    log('\nEnvironment Info:');
    log(`\n  current version of ${packageJson.name}: ${packageJson.version}`);
    log(`  running from ${__dirname}`);
    return info();
  }
};
