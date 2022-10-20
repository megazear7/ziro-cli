import chalk from 'chalk';

export default function(config) {
    console.log(`No command found: ${chalk.blue('ziro ' + config.command)}`);
}
