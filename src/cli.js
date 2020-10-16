import { program } from 'commander';
import packageJson from '../package.json';
const { log } = console;

export const start = () => {
  program
    .version(packageJson.version)
    .name(`npx ${packageJson.name}`)
    .usage('package-name')
    .arguments('[package-name]')
    .action((name) => {
      packageName = name;
    })
    .on('--help', () => {
      log('');
      log('Example:');
      log(`  ${program.name()} project-name`);
    })
    .parse(process.argv);
};
